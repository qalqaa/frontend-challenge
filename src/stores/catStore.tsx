import { create } from 'zustand';
import { getCatsBreeds, getCatsByBreed } from '../data/api';
import { CatStore } from '../model/catStore';

const FAVORITES_STORAGE_KEY = 'cat_favorites';
const API_KEY_STORAGE_KEY = 'cat_api_key';

export const useCatStore = create<CatStore>((set, get) => ({
  breeds: [],
  cats: [],
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'),
  isLoadingMain: false,
  isLoadingBreed: false,
  hasMore: true,
  error: null,
  currentPage: 0,
  picturesPerPage: 10,
  userApiKey:
    import.meta.env.VITE_API_KEY ||
    localStorage.getItem(API_KEY_STORAGE_KEY) ||
    '',
  isNeedToAuth: false,

  fetchBreeds: async () => {
    const { userApiKey, picturesPerPage, currentPage, breeds, hasMore } = get();
    if (!userApiKey) {
      set({ isNeedToAuth: true });
      return;
    }
    try {
      if (hasMore) {
        set({ isLoadingMain: true, error: null });
        const newBreeds = await getCatsBreeds(
          userApiKey,
          currentPage,
          picturesPerPage,
        );

        set({ currentPage: currentPage + 1 });
        set({
          breeds: [...breeds, ...newBreeds],
          currentPage: currentPage + 1,
          isLoadingMain: false,
        });
        if (newBreeds.length < picturesPerPage) {
          set({ hasMore: false, isLoadingMain: false });
        }
      }
    } catch (error: any) {
      set({ error, isLoadingMain: false });
    }
  },

  fetchCatsByBreed: async (breed) => {
    const { picturesPerPage, userApiKey } = get();
    try {
      set({ isLoadingBreed: true, error: null });
      const cats = await getCatsByBreed(breed, picturesPerPage, userApiKey);
      set({ cats: cats || [], isLoadingBreed: false });
    } catch (error: any) {
      set({ error, isLoadingBreed: false });
    }
  },

  resetCats: () => {
    set({
      cats: [],
    });
  },

  addToFavorites: (cat) => {
    const { favorites } = get();
    if (!favorites.find((favorite) => favorite.id === cat.id)) {
      const updatedFavorites = [...favorites, cat];
      set({ favorites: updatedFavorites });
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(updatedFavorites),
      );
    }
  },

  removeFromFavorites: (catId) => {
    const { favorites } = get();
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== catId,
    );
    set({ favorites: updatedFavorites });
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(updatedFavorites),
    );
  },

  isFavorite: (catId) =>
    get().favorites.some((favorite) => favorite.id === catId),

  setApiKey: (apiKey: string) => {
    set({ userApiKey: apiKey });
    set({ isNeedToAuth: false });
    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
  },
}));
