import React from "react";
import Task from "./Task.js"

function TaskList({tasks, category, deleteTask}) {
  const taskList = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
  })
  return (
    <div className="tasks">
    {taskList}
    </div>
  );
}

export default TaskList;
