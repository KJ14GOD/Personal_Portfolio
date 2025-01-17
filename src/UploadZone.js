import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadZone = ({ label, onUpload }) => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(URL.createObjectURL(uploadedFile));
    onUpload(uploadedFile);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="upload-zone">
      <input {...getInputProps()} />
      {file ? (
        <img src={file} alt="Uploaded Preview" className="uploaded-image" />
      ) : (
        <p>Drag & Drop or Click to Upload {label}</p>
      )}
    </div>
  );
};

export default UploadZone;
