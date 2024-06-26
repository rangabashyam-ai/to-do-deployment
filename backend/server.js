const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
