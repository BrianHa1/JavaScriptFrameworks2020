import React from "react";

function Todo(props) {
  return (
    <>
      {props.todos.map(todo => {
        return props.showCompleted === todo.completed ? (
          <p key={"todo-" + todo.id}>{todo.title}</p>
        ) : (
          undefined
        );
      })}
    </>
  );
}

export default Todo;
