import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  );

  const renderRecipes = () => {
    const recipeElements = [];
    for (let i = 0; i < recipes.length; i++) {
      recipeElements.push(
        <div
          key={recipes[i].id}
          style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem 0' }}
        >
          <h2>{recipes[i].title}</h2>
          <p>{recipes[i].description}</p>
        </div>
      );
    }

    return recipeElements.length > 0 ? recipeElements : <p>No recipes found!</p>;
  };

  return <div>{renderRecipes()}</div>;
};

export default RecipeList;
