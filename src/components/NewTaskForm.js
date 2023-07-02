import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")
  const newObj = {
    text: value,
    category: category
  }
  function handleNewTask(event){
    event.preventDefault()
    onTaskFormSubmit(newObj)
  }
  return (
    <form className="new-task-form"onSubmit={handleNewTask}>
      <label>
        Details
        <input type="text" name="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      </label>  
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category)=>{
            return<option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
