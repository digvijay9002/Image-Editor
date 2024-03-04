import { useContext } from "react";
import { ImageEditorContext } from "./ImageEditorProvider";

const ImageUpload = () => {
  const { displayFiles, handleDragEnter, handleDragLeave, handleDrop } =
    useContext(ImageEditorContext);
  return (
    <div className="loader-container">
      <div className="image-loader-container">
        <div className="fileInput-container">
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={(e) => {
              displayFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <div
            id="drag-drop-container"
            className="input-containerText"
            onClick={() => {
              const uploadInput = document.getElementById("upload-image");
              uploadInput?.click();
            }}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p className="image-editor-title">Free Online Photo Editor</p>
            <p className="image-editor-subtitle">With our free online photo editor, you can transform your photographs from bland to amazing. Upload, modify, and get your image done as per your need.</p>
            <div className="upload-btn">Drop Image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
