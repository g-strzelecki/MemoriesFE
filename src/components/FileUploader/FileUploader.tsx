import React from 'react';

import './FileUploader.css';

interface Props {
  onFileUpload: (file: File) => void;
}

export const FileUploader = (props: Props) => {

  let file = null;

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    if(e.target.files) {
      file = await e.target.files[0];
      props.onFileUpload(file);
    }

  };

  return (
    <div>
      <label>Upload Your File:</label>
      <input 
        type="file"
        className="btn-file-upload"
        onChange={onInputChange}
        multiple={false}
      />
    </div>
  )
};
