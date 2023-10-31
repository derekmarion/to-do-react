import './App.css'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const item = document.getElementById("item").value;
    setTasks([...tasks, item]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>My To-Do List</h1>
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="item" />
        <button type="submit">Add Task</button>
      </form>
      <ul id="output">
        {tasks.map((task) => (
          <li key={task} id={task}>
            <input type="checkbox" />
            <label htmlFor={task}>{task}</label>
            <form
              onClick={(e) => {
                e.preventDefault();
                deleteTask(task);
              }}
            >
              <button type="submit">delete</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
