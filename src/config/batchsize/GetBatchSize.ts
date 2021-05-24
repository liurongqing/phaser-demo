import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export const GetBatchSize = (size: number): void => {
  return ConfigStore.get(CONFIG_DEFAULTS.BATCH_SIZE);
};
