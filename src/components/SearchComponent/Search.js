import React from "react";
import "./search.css";

const Search = (props) => {
  const handleInputChange = (e) => {
    props.onSearchChange(e.target.value);
  };

  const handleSubmit = () => {
    if (props.keyword.trim() === "") {
      props.setDisplayResult(props.movies);
    }
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          className="searchTerm"
          value={props.keyword}
          onChange={handleInputChange}
        />
        <button className="btn-search" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Search;
