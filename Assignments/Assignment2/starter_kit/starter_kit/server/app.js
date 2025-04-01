const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Recipe = require('./models/Recipe');  

dotenv.config();  

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Recipe Server is running!');
});

app.post('/recipe', (req, res) => {
  const { name, description, difficulty, ingredients, steps } = req.body;

  const newRecipe = new Recipe({
    name,
    description,
    difficulty,
    ingredients,
    steps
  });

  newRecipe.save()
    .then((recipe) => res.status(201).json(recipe))
    .catch((error) => res.status(400).json({ error: 'Error creating recipe' }));
});

app.put('/recipe/:id', (req, res) => {
  const recipeId = req.params.id;
  const { name, description, difficulty, ingredients, steps } = req.body;

  Recipe.findByIdAndUpdate(recipeId, { name, description, difficulty, ingredients, steps }, { new: true })
    .then((updatedRecipe) => {
      if (!updatedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json(updatedRecipe);
    })
    .catch((error) => res.status(500).json({ error: 'Error updating recipe' }));
});

app.delete('/recipe/:id', (req, res) => {
  const recipeId = req.params.id;

  Recipe.findByIdAndDelete(recipeId)
    .then((deletedRecipe) => {
      if (!deletedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json({ message: 'Recipe deleted successfully' });
    })
    .catch((error) => res.status(500).json({ error: 'Error deleting recipe' }));
});

app.get('/recipe', (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((error) => res.status(500).json({ error: 'Error fetching recipes' }));
});

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
