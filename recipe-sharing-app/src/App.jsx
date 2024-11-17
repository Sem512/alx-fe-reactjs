import AddRecipeForm from './components/addRecipeForm';
import RecipeList from './components/recipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
