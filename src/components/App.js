import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [newTaskCategory, setNewTaskCategory] = useState(CATEGORIES[1]) //default category set to second element (first element is "All")
  const [newTaskText, setNewTaskText] = useState("")
  const [tasks, setTasks] = useState(TASKS)

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
  }
  const handleNewTaskCat = (event) => {
    setNewTaskCategory(event.target.value)
    //console.log(event.target.value)
  } 
  const handleNewTaskText = (event) => {
    setNewTaskText(event.target.value)
    //console.log(event.target.value)
  }

  const handleNewTaskSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      text: newTaskText,
      category: newTaskCategory
    }
    //console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (category === "All") return true;
    return (task.category === category)
  })

  const handleDelete = (taskTextToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskTextToDelete))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={category} categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskTextChange={handleNewTaskText} onTaskCatChange={handleNewTaskCat} onTaskFormSubmit={handleNewTaskSubmit}/>
      <TaskList tasks={tasksToDisplay} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
