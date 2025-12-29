
export interface FlashcardData {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export type TabType = 'slides' | 'flashcards' | 'quiz' | 'case-study';
