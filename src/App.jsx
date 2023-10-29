import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  },[])

  console.log('[App] todos: ', todos);


  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.id}: {todo.title}</h3>
          <h3>{todo.id}</h3>
          <p>{todo.completed ? 'DONE' : 'TODO'}</p>
        </div>
      ))}
    </>
  )
}

export default App
