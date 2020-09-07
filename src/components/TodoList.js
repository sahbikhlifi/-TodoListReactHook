import React from "react";
import Todo from "./Todo";
function TodoList({ todos, toggleCompleted, removeTodo }) {
  return (
    <ul style={{
    
    }}>
      {todos.map((todo) => (
        <Todo 
        key={todo.id} 
        todo={todo} 
        toggleCompleted={toggleCompleted} 
        removeTodo={removeTodo}

        />
      ))}
    </ul>
  );
}

export default TodoList;
