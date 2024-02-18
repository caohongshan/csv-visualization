import React, {useState} from 'react';
import CustomTable from './CustomTable';
import CSVUploader from './CSVUploader';


function App() {

  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = ({data}) => {
    setCSVData(data);
  };

  return (
    <div className="App">
      <h1>CSV文件上传和可视化示例</h1>
      <CSVUploader handleFileUpload={handleFileUpload} />
      <CustomTable csvData={csvData} />
    </div>
  );
}

export default App;
