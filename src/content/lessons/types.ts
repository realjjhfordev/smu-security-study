export type LessonBlock =
  | { type: "paragraph"; text: string; strong?: boolean }
  | { type: "heading"; text: string; level?: 3 | 4 }
  | { type: "code"; text: string; language?: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; start?: number; depth?: number; items: string[] }
  | { type: "image"; src: string; alt: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Lesson = {
  sectionId: number;
  partTitle: string;
  title: string;
  relatedQuestionIds: string[];
  blocks: LessonBlock[];
};
