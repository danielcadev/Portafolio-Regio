import { TextOptions } from "gsap";

declare module "gsap" {
  interface TextOptions {
    scrambledText?: {
      text: string;
      chars: string;
      speed: number;
    };
  }
}