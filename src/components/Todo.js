import React from "react";

function Todo({ todo, toggleCompleted, removeTodo }) {
  function handleCheckBoxClick() {
    toggleCompleted(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div   style={{
      display:'flex',
      padding: '0.5rem',
      borderBottom: '2px solid #fff',
      marginBottom: '1.5rem',
    }}
  > 
    
      <input className='checkbox' type="checkbox" onClick={handleCheckBoxClick}
      style={{
      // backgroundColor: 'red',
      // margin: '0.25rem'

      }} />
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button
        onClick={handleRemoveClick}
        style={{
        
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
