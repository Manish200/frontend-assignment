import React, { useState, useEffect } from 'react';
import Table from './components/table';
import Pagination from './components/pagination';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const recordsPerPage = 5;

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json') // api for the get request
    .then(response => response.json())
    .then(data => setData(data));
  }, []);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const currentRecords = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="app">
      <h1>Assignment</h1>
      <Table records={currentRecords} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default App;