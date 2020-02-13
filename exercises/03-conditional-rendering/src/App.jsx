import React from "react";
// import something
import todos from "./data/todos";
// import another thing
import Todo from "./components/Todo";

function App() {
  return <div className="App">{
    <Todo todos={todos} showCompleted={false} />
  }</div>;
}

export default App;
