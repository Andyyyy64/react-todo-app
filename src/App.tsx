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
  ];

  const [tasks, setTasks] = React.useState(TodoData);

  console.log(tasks); //リロードするたびに配列が初期化する -> 状態管理?

  const tasklist = tasks.map((task) => (
    <Todolist
      id={task.id}
      name={task.name}
      description={task.description}
      key={task.id}
    />
  ));

  const isTaskthere =
    tasks.length == 0 ? "No todos! Good!" : `You stil have ${tasks.length} todos left`;

  function addTask(name: string, description: string) {
    const newTask = { name, description, id: `todo-${nanoid()}` };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <div>
        <h1 className="maintitle"># Todo List</h1>
        <h2 className="remaintesk">{isTaskthere}</h2>
        {tasklist}
      </div>
      <Addtodo addTask={addTask} />
    </div>
  );
}

export default App;
