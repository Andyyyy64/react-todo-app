import { useState } from "react";
import "./App.css";
import Todolist from "./components/todolist";

const TodolistView = () => {
  return (
    <div>
      <h1 className="maintitle"># Todo List</h1>
      <Todolist />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodolistView />
    </div>
  );
}

export default App;
