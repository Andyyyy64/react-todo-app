import * as React from "react";
import "./App.css";
import Todolist from "./components/todolist";
import Addtodo from "./components/addtodo";
import { nanoid } from "nanoid";

function App() {
  
  interface Product {
    name: string;
    description: string;
    id: string;
  }

  const TodoData: Product[] = [
    { name: "egg", description: "asdf", id: "todo-1" },
  ];

  const [tasks, setTasks] = React.useState(TodoData);

  console.log(tasks)//todolistデバック

  const tasklist = TodoData.map((task) => (
    <Todolist
      id={task.id}
      name={task.name}
      description={task.description}
      key={task.id}
    />
  ));
  function addTask(name: string, description: string) {
    const newTask = { name, description, id: `todo-${nanoid()}` };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <div>
        <h1 className="maintitle"># Todo List</h1>
        {tasklist}
      </div>
      <Addtodo addTask={addTask} />
    </div>
  );
}

export default App;
