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
    completed: boolean;
  }

  const [tasks, setTasks] = React.useState<Array<Product>>([]);

  const tasklist = tasks.map((task) => (
    <Todolist
      id={task.id}
      name={task.name}
      description={task.description}
      key={task.id}
      completed={task.completed}
      isTaskcompleted={isTaskcompleted}
    />
  ));

  function isTaskthere(): string {
    let tasklengh = tasks.length - completedcounter();
    const LeftTasks =
      tasks.length == 0
        ? "No todos! Good!"
        : `You stil have ${tasklengh} todos left`;
    return LeftTasks;
  }
  function completedcounter(): number {
    let completedd = 0;
    tasks.forEach((task) => {
      if (task.completed) completedd++;
    });
    return completedd;
  }

  const TaskCompleted =
    tasks.length == 0 ? "" : `${completedcounter()} tasks completed`;

  function isTaskcompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask(name: string, description: string) {
    const newTask = {
      name,
      description,
      id: `todo-${nanoid()}`,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <div>
        <h1 className="maintitle"># Todo List</h1>
        <h2 className="remaintesk">{isTaskthere()}</h2>
        <h2 className="completedcounter">{TaskCompleted}</h2>
        {tasklist}
      </div>
      <Addtodo addTask={addTask} />
    </div>
  );
}

export default App;
