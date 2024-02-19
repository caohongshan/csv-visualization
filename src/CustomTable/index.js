import React from 'react';
import "./index.css"

const CustomTable = ({ csvData }) => {
  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {csvData.length > 0 && csvData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((data, rowIndex) => (
            <tr key={rowIndex}>
              {data.map((item, columnIndex) => (
                <td key={columnIndex} align="center">{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;