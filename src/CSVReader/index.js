import React, { useState } from 'react';
import './index.css'; // 导入样式文件

const CSVReader = () => {
    const [clients, setClients] = useState([]);
     const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'utf-8');
        reader.onload = () => {
            const str = reader.result;
            const rows = str.split('\n');
            const clientData = [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i].split(',');
                const client = {
                    locationid: row[0],
                    Applicant: row[1],
                    FacilityType: row[2],
                    cnn: row[3],
                    LocationDescription: row[4],
                };
                clientData.push(client);
            }
            setClients(clientData);
        }
    }
    
    return (
        <div className="csv-reader-container">
            <input type="file" onChange={handleFileChange} accept="*" />
            <div className="client-list">
                {clients.map((client, index) => (
                    <div key={index} className="client-item">
                        <p>Record: {client.locationid}</p>
                        <p>Date: {client.Applicant}</p>
                        <p>UTCTime: {client.FacilityType}</p>
                        <p>PressureValue: {client.cnn}</p>
                        <p>Pressure: {client.LocationDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CSVReader;