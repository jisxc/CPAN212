import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./pages/ListRecipe";
import AddRecipe from "./pages/AddRecipe";
import DetailedRecipe from "./pages/DetailedRecipe";
import EditRecipe from "./pages/EditRecipe";

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/new" element={<AddRecipe />} />
        <Route path="/recipes/:id" element={<DetailedRecipe />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
