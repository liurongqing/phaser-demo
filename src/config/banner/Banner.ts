import { SetBanner } from './SetBanner';

export const Banner = (
  title?: string,
  version?: string,
  url?: string,
  color?: string,
  background?: string
) => {
  return (): void => {
    SetBanner(title, version, url, color, background);
  };
};
