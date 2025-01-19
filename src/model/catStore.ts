import { Cat, IBreed } from './breed';

export interface CatStore {
  breeds: IBreed[];
  cats: Cat[];
  favorites: Cat[];
  isLoading: boolean;
  hasMore: boolean;
  loading: boolean;
  error: Error | null;
  currentPage: number;
  picturesPerPage: number;
  fetchBreeds: () => Promise<void>;
  getCatsByBreed: (breed: string) => void;
  addToFavorites: (cat: Cat) => void;
  removeFromFavorites: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
}
