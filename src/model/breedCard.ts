import { IBreed } from './breed';

export interface BreedCard {
  // id: string;
  breed: IBreed;
  onCLick?: () => void;
}
