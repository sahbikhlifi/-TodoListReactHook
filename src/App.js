import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import  './App.css';

const LOCAL_STORAGE_KEY = "react-tod-list-todos"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      }
      )
    )
  }

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !==id ))
}

  return (
    <div className="App">
      <h1>Todo <span style={{color: 'lime'}}>List</span></h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} 
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
                 />
    </div>
  );
}

export default App;
