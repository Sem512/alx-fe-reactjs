import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem 0' }}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found!</p>
      )}
    </div>
  );
};

export default RecipeList;
