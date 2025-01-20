// store/animations.ts
import { create } from 'zustand';

type State = {
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
};

export const useAnimationStore = create<State>((set) => ({
  hasAnimated: false,
  setHasAnimated: (value: boolean) => set(() => ({ hasAnimated: value })),
}));