const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/fetch', (req, res) => {
  res.send('Welcome to the Fetch Route!');
});

app.post('/save', (req, res) => {
  res.send('Welcome to the Save Route!');
});

app.delete('/delete', (req, res) => {
  res.send('Welcome to the Delete Route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});