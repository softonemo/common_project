import React, { useState } from 'react';
import './Todos.css';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  async function getTodos() {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos');
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }
  
}

export default Todos;
