import React from "react";
import "./pagination.css";

const Pagination = ({
  handlePrev,
  pageButtons,
  handlePagination,
  handleNext,
  page,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-page"
        onClick={handlePrev}
        disabled={page === 1}>
        {`<`}
      </button>
      {pageButtons.map((pagebutton, index) => {
        if (!isNaN(pagebutton)) {
          return (
            <button
              className="pagination-page"
              key={index}
              onClick={(e) => handlePagination(e, pagebutton)}>
              {pagebutton}
            </button>
          );
        } else {
          return (
            <span key={index} className="pagination-dots">
              {pagebutton}
            </span>
          );
        }
      })}
      <button
        className="pagination-page"
        onClick={handleNext}
        disabled={page === 500}>
        {`>`}
      </button>
    </div>
  );
};

export default Pagination;
