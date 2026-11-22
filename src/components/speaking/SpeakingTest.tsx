import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, Square, RotateCcw, Loader2, Volume2, VolumeX, 
  Play, Pause, Bookmark, ChevronLeft, ChevronRight, Search,
  Languages, Sparkles, Zap, CheckCircle
} from "lucide-react";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useMicrophonePermission } from "@/hooks/useMicrophonePermission";
import { MicrophonePermissionDialog } from "./MicrophonePermissionDialog";
import { transcribeAudio, scoreSpeaking, ScoreResult } from "@/lib/scoring";
import { SpeakingQuestion, getTestTypeInfo } from "@/data/speakingQuestions";
import { ScoreDisplay } from "./ScoreDisplay";
import { CountdownTimer } from "./CountdownTimer";
import { AudioWaveform } from "./AudioWaveform";
import { DiscussionPanel } from "@/components/practice/DiscussionPanel";
import { uploadRecording } from "@/lib/uploadRecording";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { AiScoreConfirmationDialog } from "@/components/practice/AiScoreConfirmationDialog";
import { useCredits } from "@/hooks/useCredits";
import { getPracticeScoreError, savePracticeResponse } from "@/lib/practiceResponses";

interface SpeakingTestProps {
  question: SpeakingQuestion;
  questionIndex: number;
  totalQuestions: number;
  onComplete: (score: ScoreResult, spokenText: string, duration: number, audioPath?: string | null) => void;
  onNext: () => void;
  onPrevious?: () => void;
}

type Phase = "listen" | "prep" | "recording" | "ready-to-submit" | "submitting" | "submitted" | "scoring" | "results";

// Test types that require listening to audio first
const AUDIO_FIRST_TYPES = [
  "repeat-sentence",
  "retell-lecture",
  "answer-short-question",
  "summarize-group-discussion",
  "respond-to-situation",
];

export function SpeakingTest({ 
  question, 
  questionIndex,
  totalQuestions,
  onComplete, 
  onNext,
  onPrevious 
}: SpeakingTestProps) {
  const [phase, setPhase] = useState<Phase>("prep");
  const [prepTime, setPrepTime] = useState(0);
  const [score, setScore] = useState<ScoreResult | null>(null);
  const [spokenText, setSpokenText] = useState<string>("");
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [responseId, setResponseId] = useState<string | null>(null);
  const [submittedAudioPath, setSubmittedAudioPath] = useState<string | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { credits, refresh: refreshCredits, optimisticallySpendOne } = useCredits();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
  const playbackStartedRef = useRef(false);
  const autoPlayStartedRef = useRef(false);
  
  const {
    speak,
    stop: stopSpeaking,
    isSpeaking,
    isSupported: ttsSupported,
    elapsedSeconds,
    durationSeconds,
    progress: audioProgress,
  } = useTextToSpeech();
  const { 
    isRecording, 
    recordingTime, 
    audioBlob, 
    audioUrl, 
    audioStream,
    startRecording, 
    stopRecording, 
    resetRecording, 
    error 
  } = useAudioRecorder(question.recordTime);
  const {
    permissionState: micPermission,
    requestPermission: requestMicPermission,
    error: micError,
  } = useMicrophonePermission();

  const typeInfo = getTestTypeInfo(question.type);

  // Determine if this question type needs TTS first
  const needsAudioFirst = AUDIO_FIRST_TYPES.includes(question.type);
  const isGroupDiscussion = question.type === "summarize-group-discussion";
  const textToSpeak =
    question.content.text ||
    question.content.lectureContent ||
    question.content.question ||
    question.content.discussionContent ||
    question.content.situationContext ||
    "";

  // Initialize phase based on question type
  useEffect(() => {
    if (needsAudioFirst && ttsSupported && textToSpeak) {
      setPhase("listen");
    } else {
      setPhase("prep");
      setPrepTime(question.prepTime);
    }
    setScore(null);
    setSpokenText("");
    setHasPlayedAudio(false);
    playbackStartedRef.current = false;
    autoPlayStartedRef.current = false;
    setShowScoreModal(false);
    setResponseId(null);
    setSubmittedAudioPath(null);
    setIsConfirmOpen(false);
    resetRecording();
  }, [question.id]);

  // Start TTS for audio-first questions
  useEffect(() => {
    if (phase === "listen" && ttsSupported && textToSpeak && !isSpeaking && !autoPlayStartedRef.current) {
      const timer = setTimeout(() => {
        if (isGroupDiscussion && hasPlayedAudio) return;
        autoPlayStartedRef.current = true;
        if (isGroupDiscussion) setHasPlayedAudio(true);
        speak(textToSpeak);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hasPlayedAudio, isGroupDiscussion, isSpeaking, phase, speak, textToSpeak, ttsSupported]);

  // Transition from listen to prep when TTS ends
  useEffect(() => {
    if (isSpeaking && phase === "listen") playbackStartedRef.current = true;
    if (phase === "listen" && playbackStartedRef.current && !isSpeaking) {
      playbackStartedRef.current = false;
      setPhase("prep");
      setPrepTime(question.prepTime);
    }
  }, [isSpeaking, phase]);

  // Prep timer
  useEffect(() => {
    if (phase !== "prep" || prepTime <= 0) return;
    const timer = setInterval(() => setPrepTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [phase, prepTime]);

  // Auto-stop recording when time is up
  useEffect(() => {
    if (isRecording && recordingTime >= question.recordTime) {
      stopRecording();
    }
  }, [isRecording, recordingTime, question.recordTime, stopRecording]);

  // Keep the recording as a draft until the learner explicitly submits it.
  useEffect(() => {
    if (audioBlob && phase === "recording") setPhase("ready-to-submit");
  }, [audioBlob, phase]);

  const [discussionRefreshKey, setDiscussionRefreshKey] = useState(0);

  const submitResponse = async () => {
    if (!audioBlob || phase !== "ready-to-submit") return;
    setPhase("submitting");

    try {
      const transcription = await transcribeAudio(audioBlob);
      setSpokenText(transcription);

      const audioPath = await uploadRecording({ blob: audioBlob, questionId: question.id });

      const id = await savePracticeResponse({
        questionId: question.id,
        section: "speaking",
        testType: question.type,
        responseText: transcription,
        audioPath,
        durationSeconds: recordingTime,
      });
      setResponseId(id);
      setSubmittedAudioPath(audioPath);
      setPhase("submitted");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not submit your response");
      setPhase("ready-to-submit");
    }
  };

  const handleGetScore = async () => {
    if (!responseId) return;
    setIsConfirmOpen(false);
    optimisticallySpendOne();
    setPhase("scoring");

    try {
      const result = await scoreSpeaking({
        responseId,
        testType: question.type,
        spokenText,
        originalText: question.content.text || question.content.discussionContent || question.content.situationContext,
        imageDescription: question.content.imageDescription,
        lectureContent: question.content.lectureContent,
        question: question.content.question,
        expectedAnswer: question.content.expectedAnswer,
      });
      setScore(result);
      setPhase("results");
      setShowScoreModal(true);
      onComplete(result, spokenText, recordingTime, submittedAudioPath);
      setDiscussionRefreshKey((key) => key + 1);
    } catch (err) {
      const message = await getPracticeScoreError(err, "Scoring failed. Your credit will be restored.");
      toast.error(message);
      setPhase("submitted");
      if (message.toLowerCase().includes("no scoring credits")) setIsConfirmOpen(true);
    } finally {
      await refreshCredits();
    }
  };

  const handleStartRecording = useCallback(() => {
    setPhase("recording");
    startRecording();
  }, [startRecording]);

  const handleRetry = () => {
    setScore(null);
    setSpokenText("");
    setHasPlayedAudio(false);
    playbackStartedRef.current = false;
    autoPlayStartedRef.current = false;
    setPrepTime(question.prepTime);
    setShowScoreModal(false);
    setResponseId(null);
    setSubmittedAudioPath(null);
    setIsConfirmOpen(false);
    resetRecording();
    if (needsAudioFirst && ttsSupported) {
      setPhase("listen");
    } else {
      setPhase("prep");
    }
  };

  const handlePlayAgain = () => {
    if (textToSpeak && !(isGroupDiscussion && hasPlayedAudio)) {
      if (isGroupDiscussion) setHasPlayedAudio(true);
      speak(textToSpeak);
    }
  };

  const handleSkipAudio = () => {
    stopSpeaking();
    setPhase("prep");
    setPrepTime(question.prepTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="space-y-4 animate-fade-slide-up">
      <MicrophonePermissionDialog
        permissionState={micPermission}
        onRequestPermission={requestMicPermission}
        error={micError}
      />
      {/* Test Type Header */}
      <Card className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
            {typeInfo.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-semibold text-lg">{typeInfo.name}</h2>
              <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
                📖 Study Guide
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {question.instruction}
            </p>
          </div>
        </div>
      </Card>

      {/* Question Info Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium">
            #{questionIndex + 1} {(question as any).title || `Question ${questionIndex + 1}`}
          </span>
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={cn(
              "p-1 rounded transition-colors",
              isBookmarked ? "text-amber-500" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Bookmark className={cn("h-5 w-5", isBookmarked && "fill-current")} />
          </button>
        </div>
        <Badge className="bg-teal-500 text-white hover:bg-teal-600">
          Tested ({Math.floor(Math.random() * 30) + 1})
        </Badge>
      </div>

      {/* Timer Display */}
      <div className="text-orange-500 font-medium">
        Time: {formatTime(phase === "recording" ? recordingTime : prepTime)}
      </div>

      {/* Audio Player for Listen Phase */}
      {(phase === "listen" || needsAudioFirst) && phase !== "results" && (
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={isSpeaking ? stopSpeaking : handlePlayAgain}
              disabled={isGroupDiscussion && hasPlayedAudio && !isSpeaking}
            >
              {isSpeaking ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <div className="flex-1">
              {isGroupDiscussion && (
                <p className="mb-1 text-xs text-muted-foreground">
                  {isSpeaking ? "Playing discussion audio..." : hasPlayedAudio ? "Discussion audio played" : "Discussion audio plays once"}
                </p>
              )}
              {question.type === "respond-to-situation" && (
                <p className="mb-1 text-xs text-muted-foreground">
                  {isSpeaking ? "Playing situation audio..." : "Listen to the situation"}
                </p>
              )}
              <Slider 
                value={[audioProgress]}
                max={100}
                className="w-full"
                disabled
              />
            </div>
            
            <span className="text-sm text-muted-foreground min-w-[80px]">
              {formatTime(elapsedSeconds)} / {
                durationSeconds > 0
                  ? `${audioProgress >= 100 ? "" : "~"}${formatTime(durationSeconds)}`
                  : "--:--"
              }
            </span>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Volume2 className="h-4 w-4" />
              </Button>
              <Badge variant="outline">X1.0</Badge>
              <Badge variant="outline">Blake (US) ▼</Badge>
            </div>
          </div>
        </Card>
      )}

      {/* Question Content */}
      <Card className="p-6 bg-card">
        {/* Show text for read-aloud and describe-image */}
        {question.content.text && !AUDIO_FIRST_TYPES.includes(question.type) && phase !== "results" && (
          <p className="text-lg leading-relaxed">{question.content.text}</p>
        )}

        {isGroupDiscussion && !ttsSupported && phase !== "results" && (
          <div className="space-y-2">
            <p className="font-medium">Discussion transcript</p>
            <p className="whitespace-pre-line text-sm leading-relaxed">{question.content.discussionContent}</p>
          </div>
        )}

        {question.type === "respond-to-situation" && question.content.situationContext && phase !== "results" && (
          <div className="space-y-2">
            <p className="font-medium">Situation</p>
            <p className="text-lg leading-relaxed">{question.content.situationContext}</p>
          </div>
        )}
        
        {/* Show question for answer-short-question after listening */}
        {question.content.question && phase !== "listen" && phase !== "results" && (
          <p className="text-xl font-medium">{question.content.question}</p>
        )}
        
        {question.content.imageUrl && (
          <img 
            src={question.content.imageUrl} 
            alt="Describe this" 
            className="rounded-lg max-h-64 object-cover" 
          />
        )}

      </Card>

      {/* Recording Controls */}
      <Card className="p-6">
        {/* Listen Phase */}
        {phase === "listen" && (
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <Volume2 className="h-8 w-8 text-primary animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>
              <span className="text-lg font-medium">Listen carefully...</span>
            </div>
            
            <AudioWaveform 
              isRecording={true} 
              audioStream={null}
              className="h-16"
              barCount={40}
            />
            
            {!isGroupDiscussion && (
              <Button variant="outline" onClick={handleSkipAudio}>
                Skip to Preparation
              </Button>
            )}
          </div>
        )}

        {/* Prep Phase */}
        {phase === "prep" && (
          <div className="text-center space-y-6">
            <CountdownTimer
              totalSeconds={question.prepTime}
              currentSeconds={question.prepTime - prepTime}
              isActive={prepTime > 0}
              label="Preparation Time"
              variant="prep"
            />
            
            <Button 
              onClick={handleStartRecording} 
              size="lg" 
              className="mt-4 gradient-primary text-primary-foreground"
            >
              <Mic className="mr-2 h-5 w-5" /> Start Recording
            </Button>
          </div>
        )}

        {/* Recording Phase */}
        {phase === "recording" && (
          <div className="text-center space-y-6">
            <CountdownTimer
              totalSeconds={question.recordTime}
              currentSeconds={recordingTime}
              isActive={isRecording}
              label="Recording"
              variant="recording"
            />
            
            <AudioWaveform 
              isRecording={isRecording} 
              audioStream={audioStream}
              className="h-16"
            />
            
            <Button onClick={stopRecording} size="lg" variant="destructive">
              <Square className="mr-2 h-5 w-5" /> Stop Recording
            </Button>
          </div>
        )}

        {phase === "ready-to-submit" && (
          <div className="space-y-4 py-6 text-center">
            <CheckCircle className="mx-auto h-10 w-10 text-primary" />
            <p className="font-medium">Recording complete. Submit it to save your response before scoring.</p>
            <Button onClick={submitResponse} size="lg" className="gradient-primary text-primary-foreground">
              Submit Response
            </Button>
          </div>
        )}

        {phase === "submitting" && (
          <div className="text-center space-y-4 py-8" role="status" aria-live="polite">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="font-medium">Submitting and saving your response...</p>
          </div>
        )}

        {phase === "submitted" && (
          <div className="space-y-4 py-6 text-center">
            <CheckCircle className="mx-auto h-10 w-10 text-success" />
            <p className="font-semibold">Response saved. You can request an AI score now.</p>
            <Button onClick={() => setIsConfirmOpen(true)} size="lg" className="gradient-primary text-primary-foreground">
              <Zap className="mr-2 h-5 w-5" /> Get AI Score
            </Button>
          </div>
        )}

        {phase === "scoring" && (
          <div className="text-center space-y-4 py-8" role="status" aria-live="polite">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <div>
              <p className="font-medium">Scoring your response...</p>
              <p className="text-sm text-muted-foreground mt-1">Your credit is reserved while the score is generated.</p>
            </div>
          </div>
        )}

        {/* Results Phase */}
        {phase === "results" && score && !showScoreModal && (
          <div className="space-y-6">
            <ScoreDisplay 
              score={score} 
              spokenText={spokenText}
              originalText={question.content.text || question.content.discussionContent || question.content.situationContext}
              audioUrl={audioUrl || undefined}
            />
            
            <div className="flex gap-3 justify-center">
              <Button onClick={handleRetry} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" /> Try Again
              </Button>
              <Button onClick={onNext} className="gradient-primary text-primary-foreground">
                Next Question
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outline" size="sm" onClick={submitResponse} disabled={phase !== "ready-to-submit"}>
          Submit Response
        </Button>
        <Button variant="outline" size="sm" onClick={handleRetry} disabled={phase === "recording" || phase === "submitting" || phase === "scoring"}>
          Re-do
        </Button>
        <Button variant="outline" size="sm" className="text-primary border-primary">
          <Languages className="h-4 w-4 mr-1" /> Translation
        </Button>
        <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-600">
          <Sparkles className="h-4 w-4 mr-1" /> Zen Practice
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Answer
        </Button>
        
        <div className="ml-auto flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            📧 × 5
          </Badge>
          <Button variant="outline" size="sm">
            Question Co...
          </Button>
          <Button variant="default" size="sm" className="bg-emerald-500 hover:bg-emerald-600">
            Search
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onPrevious}
            disabled={questionIndex === 0}
          >
            Previous
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="bg-orange-500 hover:bg-orange-600"
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && score && (
        <ScoreDisplay 
          score={score}
          spokenText={spokenText}
          originalText={question.content.text || question.content.discussionContent || question.content.situationContext}
          audioUrl={audioUrl || undefined}
          isModal
          onClose={() => setShowScoreModal(false)}
        />
      )}
      <AiScoreConfirmationDialog
        open={isConfirmOpen}
        credits={credits}
        isScoring={phase === "scoring"}
        onOpenChange={setIsConfirmOpen}
        onConfirm={handleGetScore}
      />

      {/* Community Discussion / Board / Me */}
      <DiscussionPanel questionId={question.id} testType="speaking" refreshKey={discussionRefreshKey} />
    </div>
  );
}
