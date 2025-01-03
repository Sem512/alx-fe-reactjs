import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" render={() => <AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
