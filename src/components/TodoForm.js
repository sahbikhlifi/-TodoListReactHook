import React, { useState } from "react";
import * as uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      //reset inpput
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input_form"
        placeholder="What You Want To Do..."
        name="task"
        type="text"
        value={todo.task}
        onChange={handleChange}
      />
      <button
        type="submit"
        style={{
          height: "40px",
          width: "60px",
          borderRadius: "25px",
          outline: "none",
          border: "none",
          backgroundColor: "#fff",
          color: "black",
        }}
      >
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
