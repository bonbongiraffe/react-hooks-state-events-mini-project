import React from "react";

function NewTaskForm({ categories, onTaskTextChange, onTaskCatChange, onTaskFormSubmit}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onTaskTextChange}/>
      </label>
      <label>
        Category
        <select name="category" defaultValue={categories[1]} onChange={onTaskCatChange}>
          {categories.map((category) => {
            if (category === "All") return null;
            else return <option key={category} value={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
