import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export const SetBanner = (
  title = '',
  version = '',
  url = '',
  color = '#fff',
  background = 'linear-gradient(#3e0081 40%, #00bcc3)'
): void => {
  ConfigStore.set(CONFIG_DEFAULTS.BANNER, {
    title,
    version,
    url,
    color,
    background,
  });
};
