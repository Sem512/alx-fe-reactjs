import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from data.json
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Recipe List</h1>
      <Link to="/add-recipe" className="text-blue-500 hover:underline inline-block mb-4">
        Add New Recipe
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 sm:h-48 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Recipe
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default HomePage;
