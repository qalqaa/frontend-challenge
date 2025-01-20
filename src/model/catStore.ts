import { Cat, IBreed } from './breed';

export interface CatStore {
  breeds: IBreed[];
  cats: Cat[];
  favorites: Cat[];
  isLoadingMain: boolean;
  isLoadingBreed: boolean;
  hasMore: boolean;
  error: Error | null;
  currentPage: number;
  picturesPerPage: number;
  fetchBreeds: () => Promise<void>;
  fetchCatsByBreed: (breed: string) => void;
  resetCats: () => void;
  addToFavorites: (cat: Cat) => void;
  removeFromFavorites: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
}
