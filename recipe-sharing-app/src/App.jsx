import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/addRecipeForm';
import RecipeList from './components/recipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/" element={<AddRecipeForm />} />
          <Route path="/" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
