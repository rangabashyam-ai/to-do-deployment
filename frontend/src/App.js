import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => {
        setTodos(response.data);
      });
  }, []);

  const addTodo = () => {
    const todo = { text: newTodo };
    axios.post('http://localhost:5000/api/todos', todo)
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
