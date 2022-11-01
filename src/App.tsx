import * as React from "react";
import "./App.css";
import Todolist from "./components/todolist";
import Addtodo from "./components/addtodo";

const TodolistView = () => {

interface Product {
    name: string;
    description: string;
    id: number;
  }

  const TodoData: Product[] = [
    { name: "egg", description: "buy 2 egg", id: 1 },
    { name: "egg", description: "buy 2 egg", id: 1 },
  ];
  const tasklist = TodoData.map((task) => (
    <Todolist
      id={task.id}
      name={task.name}
      description={task.description}
      key={task.id}
    />
  ));

  return (
    <div>
      <h1 className="maintitle"># Todo List</h1>
      {tasklist}
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
