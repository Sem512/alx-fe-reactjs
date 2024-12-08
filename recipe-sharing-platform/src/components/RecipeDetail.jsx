import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the data.json
    const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-8">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-t-lg" />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Cooking Instructions</h2>
        <ol className="list-decimal list-inside mt-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700 mt-1">{step}</li>
          ))}
        </ol>
    </div>
  );
}

export default RecipeDetail;
