import React from 'react';
import './table.css';

const Table = ({ records }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged (USD)</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record["s.no"]}>
            <td>{record["s.no"]}</td>
            <td>{record["percentage.funded"]}%</td>
            <td>${record["amt.pledged"].toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;