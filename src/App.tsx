import * as React from "react";
import "./App.css";
import Todolist from "./components/todolist";
import Addtodo from "./components/addtodo";
import { nanoid } from "nanoid";
import { useAuth0 } from "@auth0/auth0-react"
import Button from "@mui/material/Button";

function App() {
  interface Product {
    name: string;
    description: string;
    id: string;
    completed: boolean;
  }

  const [tasks, setTasks] = React.useState<Array<Product>>([]); //stateにtodolistとなる空の配列を持っておく

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); //auth0の関数を定義

  const tasklist = tasks.map((task) => (
    <Todolist
      id={task.id}
      name={task.name}
      description={task.description}
      key={task.id}
      completed={task.completed}
      isTaskcompleted={isTaskcompleted}
      deleteTask={deleteTask}
    /> //mapで配列の数だけTodolistを出力
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
      //forEachでtask.completedを確認
      if (task.completed) completedd++;
      //task.completedがtrueだとcompleteddをインクリメント
    });
    return completedd;
  }

  function TaskCompleted(): string {
    const taskcompleteddd =
      tasks.length == 0 ? "" : `${completedcounter()} tasks completed`;
    return taskcompleteddd;
  }
  function isTaskcompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, completed: !task.completed };
        //idがpropのidとマッチしたらcompletedが反転した配列に更新される
      }
      return task;
      //動作がない場合はそのまま
    });
    setTasks(updatedTasks); //stateに更新された配列を反映
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id != task.id);
    //idがpropのidとマッチしたらその要素を除いた新しい配列に更新
    setTasks(remainingTasks); //stateに更新された配列を反映
  }

  function addTask(name: string, description: string) {
    const newTask = {
      name,
      description,
      id: `todo-${nanoid()}`,
      completed: false,
    };
    //stateからname,descriptionを入力として取る
    setTasks([...tasks, newTask]);//新しい要素を含めた新しい配列をstateに更新
  }
  return (
    <div className="App">
      {!isAuthenticated ? (
        <Button variant="contained" color="primary" onClick={loginWithRedirect}>Log in</Button>
      ) : (
        <Button variant="contained" color="error" onClick={() => {
          logout({ returnTo: window.location.origin })
        }}
        >
          Logout
        </Button>
      )}
      <div>
        <h1 className="maintitle"># Todo List</h1>
        <h2 className="remaintesk">{isTaskthere()}</h2>
        <h2 className="completedcounter">{TaskCompleted()}</h2>
        {tasklist}
      </div>
      <Addtodo addTask={addTask} />
    </div>
  );
}

export default App;
