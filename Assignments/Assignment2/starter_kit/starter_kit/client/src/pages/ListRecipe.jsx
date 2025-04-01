import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListRecipe.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/recipe")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:8001/recipe/${id}`, { method: "DELETE" })
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
      })
      .catch((error) => console.error("Error deleting recipe:", error));
  }

  return (
    <div className="recipe-list-container">
      <h1>All Recipes</h1>
      <div className="add-recipe-button-container">
        <Link to="/recipes/new">
          <button className="add-recipe-btn">Add New Recipe</button>
        </Link>
      </div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <div className="recipe-actions">
              <Link to={`/recipes/${recipe._id}`}>View</Link>
              <Link to={`/recipes/${recipe._id}/edit`}>Edit</Link>
              <button onClick={() => handleDelete(recipe._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
