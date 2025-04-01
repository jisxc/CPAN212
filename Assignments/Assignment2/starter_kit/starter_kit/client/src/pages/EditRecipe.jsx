import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ListRecipe.css";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    difficulty: '',
    ingredients: [],
    steps: [],
  });

  useEffect(() => {
    fetch(`http://localhost:8001/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8001/recipe/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    })
      .then((response) => response.json()) 
      .then(() => navigate(`/recipes/${id}`)) 
      .catch((error) => console.error('Error updating recipe:', error));
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Difficulty:
          <select
            name="difficulty"
            value={recipe.difficulty}
            onChange={handleChange}
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
