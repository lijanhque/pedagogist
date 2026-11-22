import { useState, useCallback, useEffect, useRef } from "react";

interface UseTextToSpeechReturn {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
  elapsedSeconds: number;
  durationSeconds: number;
  progress: number;
}

export function useTextToSpeech(): UseTextToSpeechReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [progress, setProgress] = useState(0);
  const elapsedSecondsRef = useRef(0);
  const durationSecondsRef = useRef(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const playbackTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playbackStartedAtRef = useRef<number | null>(null);
  const playbackIdRef = useRef(0);

  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = useCallback((text: string) => {
    if (!isSupported) {
      console.warn("Text-to-speech is not supported in this browser");
      return;
    }

    const playbackId = ++playbackIdRef.current;
    window.speechSynthesis.cancel();
    if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
    playbackStartedAtRef.current = null;
    const estimatedDuration = Math.max(1, Math.ceil(
      text.trim().split(/\s+/).filter(Boolean).length * 60 / (150 * 0.9)
    ));
    elapsedSecondsRef.current = 0;
    durationSecondsRef.current = estimatedDuration;
    setElapsedSeconds(0);
    setDurationSeconds(estimatedDuration);
    setProgress(0);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to get a good English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Microsoft") || v.name.includes("Samantha"))
    ) || voices.find((v) => v.lang.startsWith("en-"));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      if (playbackId !== playbackIdRef.current) return;
      setIsSpeaking(true);
      playbackStartedAtRef.current = Date.now();
      playbackTimerRef.current = setInterval(() => {
        const startedAt = playbackStartedAtRef.current;
        if (startedAt === null) return;
        const elapsed = Math.floor((Date.now() - startedAt) / 1000);
        elapsedSecondsRef.current = elapsed;
        setElapsedSeconds(elapsed);
        setProgress(Math.min((elapsed / estimatedDuration) * 100, 99));
      }, 1000);
    };
    utterance.onend = () => {
      if (playbackId !== playbackIdRef.current) return;
      const startedAt = playbackStartedAtRef.current;
      const elapsed = startedAt === null ? 0 : Math.floor((Date.now() - startedAt) / 1000);
      if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
      playbackTimerRef.current = null;
      playbackStartedAtRef.current = null;
      setIsSpeaking(false);
      elapsedSecondsRef.current = elapsed;
      setElapsedSeconds(elapsed);
      if (elapsed > 0) {
        durationSecondsRef.current = elapsed;
        setDurationSeconds(elapsed);
      }
      setProgress(100);
    };
    utterance.onerror = () => {
      if (playbackId !== playbackIdRef.current) return;
      if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
      playbackTimerRef.current = null;
      playbackStartedAtRef.current = null;
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (isSupported) {
      const startedAt = playbackStartedAtRef.current;
      const elapsed = startedAt === null ? elapsedSecondsRef.current : Math.floor((Date.now() - startedAt) / 1000);
      const duration = durationSecondsRef.current;
      playbackIdRef.current += 1;
      if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
      playbackTimerRef.current = null;
      playbackStartedAtRef.current = null;
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      elapsedSecondsRef.current = elapsed;
      setElapsedSeconds(elapsed);
      setProgress(duration > 0 ? Math.min((elapsed / duration) * 100, 99) : 0);
    }
  }, [isSupported]);

  useEffect(() => () => {
    playbackIdRef.current += 1;
    if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
    if (isSupported) window.speechSynthesis.cancel();
  }, [isSupported]);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
    elapsedSeconds,
    durationSeconds,
    progress,
  };
}
