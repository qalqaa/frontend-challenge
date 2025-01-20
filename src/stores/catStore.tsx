import { create } from 'zustand';
import { getCatsBreeds, getCatsByBreed } from '../data/api';
import { CatStore } from '../model/catStore';

const FAVORITES_STORAGE_KEY = 'cat_favorites';

export const useCatStore = create<CatStore>((set, get) => ({
  breeds: [],
  cats: [],
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'),
  isLoadingMain: false,
  isLoadingBreed: false,
  hasMore: true,
  error: null,
  currentPage: 1,
  picturesPerPage: 10,
  userApiKey: import.meta.env.VITE_API_KEY || '',
  isNeedToAuth: false,

  fetchBreeds: async () => {
    try {
      set({ isLoadingMain: true, error: null });
      const breeds = await getCatsBreeds();
      set({ breeds: breeds || [], isLoadingMain: false });
    } catch (error: any) {
      set({ error, isLoadingMain: false });
    }
  },

  fetchCatsByBreed: async (breed) => {
    const { currentPage, picturesPerPage, cats, userApiKey } = get();
    try {
      if (!userApiKey) {
        set({ isNeedToAuth: true });
        return;
      }
      set({ isLoadingBreed: true, error: null });
      const newCats = await getCatsByBreed(
        breed,
        picturesPerPage,
        currentPage,
        userApiKey,
      );
      if (newCats.length < picturesPerPage) {
        set({ hasMore: false });
      }
      set({
        cats: [...cats, ...newCats],
        currentPage: currentPage + 1,
        isLoadingBreed: false,
      });
    } catch (error: any) {
      set({ error, isLoadingBreed: false });
    }
  },

  resetCats: () => {
    set({
      cats: [],
      currentPage: 1,
      hasMore: true,
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
  },
}));
