// types/timeline.ts
interface TimelineImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    url?: string;
  }
  
  interface TimelineContent {
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