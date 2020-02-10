import React from "react";

const Todo = ({ todos, showCompleted }) => {
  return todos.map((todo, index) => {
    if (showCompleted && todo.completed) {
      return (
        <ul>
          <li>{todo.title}</li>
        </ul>
      );
    }
    if (!showCompleted && !todo.completed) {
      return (
        <ul>
          <li>{todo.title}</li>
        </ul>
      );
    }
  });
};

export default Todo;
