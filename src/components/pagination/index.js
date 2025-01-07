import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        className="page-btn" 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index} 
          className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button 
        className="page-btn" 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;