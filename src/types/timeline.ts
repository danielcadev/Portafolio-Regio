// types/timeline.ts
export interface TimelineImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
}

export interface TimelineContent {
  text: string;
  highlights?: string[];
  image?: TimelineImage;
  images?: TimelineImage[];
  additionalText?: string;
}

export interface TimelineEntry {
  title: string;
  content: TimelineContent;
}