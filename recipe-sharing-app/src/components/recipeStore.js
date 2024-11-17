import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  setRecipes: [],

  // Add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

  // Update a recipe by ID
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
}));

export default useRecipeStore;
