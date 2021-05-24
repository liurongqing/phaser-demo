import { SetBatchSize } from './SetBatchSize';
export const BatchSize = (size: number): (() => void) => {
  return (): void => {
    SetBatchSize(size);
  };
};
