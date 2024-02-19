import React from 'react';
import "./index.css"

const CustomTable = ({ csvData }) => {
  // 确保数据中有至少一行才渲染表格
  if (csvData.length < 1) {
    return <div>No data available</div>;
  }
  // 提取表头行
  const headers = csvData[0];
  // 提取数据行（不包括表头行）
  const dataRows = csvData.slice(1);

  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((data, rowIndex) => (
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