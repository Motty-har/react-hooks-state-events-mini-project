import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [categories, setCategories] = useState("All")
  const [task, setTask] = useState(TASKS)
  const tasksToShow = task.filter((task) => {
    return categories === "All" || categories === task.category
  })
  const dropdown = CATEGORIES.filter((category) => {
    return category != "All"
  })
  function onTaskFormSubmit(newObj){
    setTask([...task, newObj])
  }
  function deleteTask(text){
    setTask(task.filter((task) => {
      return task.text !== text
    }))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategories={setCategories} categoryFiltered={categories}/>
      <NewTaskForm categories={dropdown} setTask={setTask} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToShow} category={categories} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
