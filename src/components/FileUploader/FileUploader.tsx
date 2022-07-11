import React, { SyntheticEvent, useState } from 'react';

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

  // const saveFile = (e: SyntheticEvent) => {
  //   e.preventDefault();

  //   const data = new FormData();

  //   data.append('file', file);

  //   axios.post('//localhost:8000/upload', data)
  //     .then((e) => {
  //       toast.success('Upload Success');
  //     })
  //     .catch((e) => {
  //       toast.error('Upload Failed');
  //     })
  // };

  return (
    <div>
      <label>Upload Your File:</label>
      <input 
        type="file"
        onChange={onInputChange}
        multiple={false}
      />
    </div>
  )
};
