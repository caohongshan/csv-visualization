import React from 'react';
import { useCSVReader } from 'react-papaparse';

const CSVUploader = ({handleFileUpload}) => {

  const { CSVReader } = useCSVReader();

   
  return (
    <div>
      <h2>请选择要上传CSV文件：</h2>
      <CSVReader
        onUploadAccepted={(results) => {
          console.log('---------------------------');
          console.log(results);
          handleFileUpload(results)
          console.log('---------------------------');
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
        }) => (
          <>
            <div style={styles.csvReader}>
              <button type='button' {...getRootProps()} style={styles.browseFile}>
                Browse file
              </button>
              <div style={styles.acceptedFile}>
                {acceptedFile && acceptedFile.name}
              </div>
              <button {...getRemoveFileProps()} style={styles.remove} >
                Remove
              </button>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
    </div>
  );
};

const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  browseFile: {
    width: '20%',
  },
  acceptedFile: {
    border: '1px solid #ccc',
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: '80%',
  },
  remove: {
    borderRadius: 0,
    padding: '0 20px',
  },
  progressBarBackgroundColor: {
    backgroundColor: 'red',
  },
};

export default CSVUploader;