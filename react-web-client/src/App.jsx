import { useEffect, useState } from "react";
import "./App.css";
import ErrorAlert from "./ErrorAlert";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import { getAllTasks } from "./api";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(null);

  const onAddTask = (task) => setTasks((prev) => [...prev, task]);

  useEffect(() => {
    getAllTasks()
      .then(setTasks)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <h1>Todo App</h1>
      {error && <ErrorAlert error={error} />}
      <div>
        {tasks !== null && <TasksList tasks={tasks} />}
        <AddTask onSuccess={onAddTask} onError={setError} />
      </div>
    </>
  );
}

export default App;
