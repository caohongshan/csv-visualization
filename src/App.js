import React, {useState} from 'react';
import CustomTable from './CustomTable';
import CSVUploader from './CSVUploader';
import CSVReader from './CSVReader';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = ({data}) => {
    setCSVData(data);
  };

  return (
    <div className="App">
       <h1>CSV文件上传和可视化示例</h1>
       <div className="tab">
        <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>第三方库</button>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>原生js</button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>
            <CSVUploader handleFileUpload={handleFileUpload} />
            <CustomTable csvData={csvData} />
          </div>
        }
        {activeTab === 1 && <div><CSVReader /></div>}
      </div>
    </div>
  );
}

export default App;
