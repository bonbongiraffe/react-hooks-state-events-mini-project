import React from "react";

function CategoryFilter({ selectedCategory, categories, onCategoryChange }) {
  const handleClick = (event) => {
    onCategoryChange(event.target.innerText)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button 
        key={category}
        onClick={handleClick} 
        className={(selectedCategory===category) ? "selected":""}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
