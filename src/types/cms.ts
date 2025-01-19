// types/cms.ts
export interface Feature {
    title: string;
    description: string;
    image: string;
    badge: string;
    gradient: string;
  }
  
  export interface FeatureCardProps extends Feature {
    index: number;
  }