import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Stores user's favorite recipes
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [], // Stores personalized recommendations
  generateRecommendations: () => set(state => {
    // Example: Create recommendations based on favorites
    const recommended = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Random filter for now
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
