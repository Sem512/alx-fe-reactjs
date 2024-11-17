import {create} from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  getFilteredRecipes: () => {
    return (get) =>
      get().recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      );
  },

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));

export default useRecipeStore;
