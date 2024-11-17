import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/addRecipeForm';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
