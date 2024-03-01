import { useContext } from "react";
import Flip from "./Flip";
import { ImageEditorContext } from "./ImageEditorProvider";
import Settings from "./Settings";
import "../App.css";


const ImagePreview = () => {
  const {
    toggleCropBox,
    cropBox,
    handleRemoveBG,
    appliedFilter,
    applyFilter, image
  } = useContext(ImageEditorContext);

  // List of CSS gram filters
  const filters = [
    "aden", "brannan", "brooklyn", "clarendon", "earlybird",
    "gingham", "hudson", "inkwell", "kelvin", "lark",
    "lofi", "maven", "mayfair", "moon", "nashville",
    "perpetua", "reyes", "rise", "slumber", "stinson",
    "toaster", "valencia", "walden", "willow", "xpro2"
  ];
  const handleApplyFilter = (filter) => {
    applyFilter(filter);
  };

  return (
    <>
      <div className="image-preview-container">
        <div id="settings-container">
          <Settings />
          <div className="flip-container">
            <button id="crop-box-btn" onClick={toggleCropBox} disabled={cropBox}>
              Crop Image
            </button>
          </div>
          <Flip />
        </div>
        <div id="image-preview" className={`image-canvas ${appliedFilter}`}>

        </div>
      </div >
      <div className="cssGram-filters">
        {/* Render filter previews */}
        {filters.map((filter) => (
          <img
            key={filter}
            className={`filter-preview ${filter} ${appliedFilter === filter ? 'selected' : ''}`}
            onClick={() => handleApplyFilter(filter)} // Pass the filter to the function
            alt={filter}
            src={image}
          />
        ))}
      </div>

      <div className="removeBackground">
        <button onClick={handleRemoveBG}>Remove Background</button>
      </div >
    </>
  );
};

export default ImagePreview;
