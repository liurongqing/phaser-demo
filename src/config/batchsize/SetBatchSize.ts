import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export const SetBatchSize = (size: number): void => {
  ConfigStore.set(CONFIG_DEFAULTS.BATCH_SIZE, size);
};
