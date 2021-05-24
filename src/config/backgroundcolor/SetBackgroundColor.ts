import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export const SetBackgroundColor = (color: number): void => {
  ConfigStore.set(CONFIG_DEFAULTS.BACKGROUND_COLOR, color);
};
