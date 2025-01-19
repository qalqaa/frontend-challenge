import { create } from 'zustand';
import { getCatsBreeds, getCatsByBreed } from '../data/api';
import { CatStore } from '../model/catStore';

export const useCatStore = create<CatStore>((set, get) => ({
  breeds: [],
  cats: [],
  favorites: [],
  isLoading: false,
  hasMore: true,
  loading: false,
  error: null,
  currentPage: 1,
  picturesPerPage: 10,

  fetchBreeds: async () => {
    try {
      set({ isLoading: true, error: null });
      const breeds = await getCatsBreeds();
      set({ breeds: breeds || [], isLoading: false });
    } catch (error: any) {
      set({ error, isLoading: false });
    }
  },

  getCatsByBreed: async (breed) => {
    const { currentPage, picturesPerPage, cats } = get();
    try {
      set({ loading: true, error: null });
      const newCats = await getCatsByBreed(breed, picturesPerPage, currentPage);
      if (newCats.length < picturesPerPage) {
        set({ hasMore: false });
      }
      set({
        cats: [...cats, ...newCats],
        currentPage: currentPage + 1,
        loading: false,
      });
    } catch (error: any) {
      set({ error, loading: false });
    }
  },

  addToFavorites: (cat) => {
    const { favorites } = get();
    if (!favorites.find((favorite) => favorite.id === cat.id)) {
      set({ favorites: [...favorites, cat] });
    }
  },

  removeFromFavorites: (catId) => {
    const { favorites } = get();
    set({
      favorites: favorites.filter((favorite) => favorite.id !== catId),
    });
  },

  isFavorite: (catId) =>
    get().favorites.some((favorite) => favorite.id === catId),
}));
