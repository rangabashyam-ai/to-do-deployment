import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('https://todo-backend.jollyground-88366a8f.centralindia.azurecontainerapps.io/api/todos')
      .then(response => {
        setTodos(response.data);
      });
  }, []);

  const addTodo = () => {
    const todo = { text: newTodo };
    axios.post('https://todo-backend.jollyground-88366a8f.centralindia.azurecontainerapps.io/api/todos', todo)
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      });
  };

  return (
    <div>
      <h1>Yash APP</h1>
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
