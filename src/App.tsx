import * as React from "react";
import "./App.css";
import Todolist from "./components/todolist";
import Addtodo from './components/addtodo'

const TodolistView = () => {

  type Data = [{ name: string; description: string }];
  
  const TodoData: Data = [
    { name: "egg", description: "buy 2 egg" },
  ];
  return (
    <div>
      <h1 className="maintitle"># Todo List</h1>
      <Todolist name="egg" description="2 egg" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodolistView />
      <Addtodo />
    </div>
  );
}

export default App;
