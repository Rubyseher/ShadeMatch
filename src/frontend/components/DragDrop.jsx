import React, { useState } from "react";
import '../styles/DragDrop.css'
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [_file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        <p>JPG, PNG, or GIF only pls</p>
      </div>
    </div>
  );
}

export default DragDrop;
