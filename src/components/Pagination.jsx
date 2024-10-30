import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        style={{ color: "white" }}
        key={i}
        onClick={() => onPageChange(i)}
        className={currentPage === i ? "active" : ""}
      >
        {i}
      </button>
    );
  }

  return <div className="pagination">{buttons}</div>;
};

export default Pagination;
