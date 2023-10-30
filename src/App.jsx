import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let tasks = [];
  
  const addTask = (e) => {
    e.preventDefault();
    let item = document.getElementById("item").value;
    tasks.push(item);
    console.log(tasks);
    let list_item = document.createElement("li");
    let output = document.getElementById("output");
    output.appendChild(list_item);
  };

  return (
    <>

      <h1>My To-Do List</h1>
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="item"/>
          <button type="submit">Add Task</button>
      </form>
      <ul id="output">
      </ul>
    </>
  )
}

export default App
