import { useMemo } from "react";
import practiceQuestionBank from "@/data/practiceQuestionBank.json";
import {
  listeningQuestions,
  ListeningQuestion,
  ListeningTestType,
} from "@/data/listeningQuestions";
import {
  readingQuestions,
  ReadingQuestion,
  ReadingTestType,
} from "@/data/readingQuestions";
import {
  speakingQuestions,
  SpeakingQuestion,
  TestType,
} from "@/data/speakingQuestions";
import {
  writingQuestions,
  WritingQuestion,
  WritingTestType,
} from "@/data/writingQuestions";

export type PracticeSection = "speaking" | "writing" | "reading" | "listening";
export type PracticeQuestionType = TestType | WritingTestType | ReadingTestType | ListeningTestType;
export type PracticeQuestion = SpeakingQuestion | WritingQuestion | ReadingQuestion | ListeningQuestion;

const typeCounts = new Map(
  Object.entries(practiceQuestionBank).flatMap(([section, entries]) =>
    entries.map((entry) => [`${section}:${entry.type}`, entry.count] as const),
  ),
);

export function getPracticeQuestionCount(section: PracticeSection, type: PracticeQuestionType): number {
  return typeCounts.get(`${section}:${type}`) ?? 0;
}

export function getBuiltInQuestions(section: PracticeSection, type: PracticeQuestionType): PracticeQuestion[] {
  switch (section) {
    case "speaking": return speakingQuestions.filter((question) => question.type === type);
    case "writing": return writingQuestions.filter((question) => question.type === type);
    case "reading": return readingQuestions.filter((question) => question.type === type);
    case "listening": return listeningQuestions.filter((question) => question.type === type);
  }
}

interface QuestionBankState {
  key: string;
  questions: PracticeQuestion[];
  error: string | null;
  warning: string | null;
  loading: boolean;
}

export function usePracticeQuestionBank(
  section: PracticeSection,
  type: PracticeQuestionType | null,
) {
  const key = useMemo(() => `${section}:${type ?? ""}`, [section, type]);

  const questions = useMemo(
    () => (type ? getBuiltInQuestions(section, type) : []),
    [section, type],
  );

  return {
    questions,
    error: null,
    warning: null,
    loading: false,
    retry: () => {},
  };
}