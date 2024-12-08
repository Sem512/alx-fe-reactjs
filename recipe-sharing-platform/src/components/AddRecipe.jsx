import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!instructions) newErrors.instructions = 'Instructions are required';

    if (ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please include at least two ingredients';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddRecipe({ title, ingredients, instructions });
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-md h-24"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="instructions" className="block text-gray-700">Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-3 py-2 border rounded-md h-24"
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
