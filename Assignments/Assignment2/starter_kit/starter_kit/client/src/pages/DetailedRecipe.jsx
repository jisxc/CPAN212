import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ListRecipe.css";

function DetailedRecipe() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:8001/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  function handleDelete(id) {
    fetch(`http://localhost:8001/recipe/${id}`, { method: 'DELETE' })
      .then(() => window.location.replace("/")) 
      .catch((error) => console.error('Error deleting recipe:', error));
  }
  if (!recipe) return <p>Loading...</p>;  

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
    
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div>
        <Link to={`/recipes/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default DetailedRecipe;
