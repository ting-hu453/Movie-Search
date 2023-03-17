import React, { useState } from "react";
import "./filter.css";

const Filter = ({ categories, onFilterChange, selectedGenres, handleAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickCategory = (category) => {
    onFilterChange(category.id);
  };

  return (
    <div className="wrapper">
      <button className="btn-filter" onClick={handleOpen}>
        <span>Filter</span>
      </button>
      <div className="filter-container">
        {isOpen ? (
          <div className="filter-category-container">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className={`btn-category-${selectedGenres.has(category.id)}`}
                  onClick={(e) => handleClickCategory(category)}>
                  {category.name}
                </button>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Filter;
