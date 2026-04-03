import { useEffect, useState } from "react";
import "./App.css";
import Addtask from "./components/Addtask";
import Header from "./components/Header";
import Showtask from "./components/Showtask";
export default function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList") || "[]"),
  );
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <>
      <div className="App">
        <Header />
        <Addtask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <Showtask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
      </div>
    </>
  );
}
