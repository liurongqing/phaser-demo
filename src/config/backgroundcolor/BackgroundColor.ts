import { SetBackgroundColor } from './SetBackgroundColor';

export const BackgroundColor = (color: number): (() => void) => {
  return (): void => SetBackgroundColor(color);
};
