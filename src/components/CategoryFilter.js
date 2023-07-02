import React from "react";

function CategoryFilter({categories, setCategories, categoryFiltered}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        const className = category === categoryFiltered ? "selected" : null
        return <button className={className} key={category} 
        onClick={() => setCategories(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
