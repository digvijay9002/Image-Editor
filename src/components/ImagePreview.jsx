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
    applyFilter,
    image,
    setFlipRotate,
  } = useContext(ImageEditorContext);

  // List of CSS gram filters
  const filters = [
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
    "xpro2",
  ];
  const handleApplyFilter = (filter) => {
    applyFilter(filter);
  };

  return (
    <>
      <div className="image-preview-container">
        <div className="options-container">
          <div className="adjustment-options">
            <span class="material-symbols-outlined" id="adjustment-options">
              tune
            </span>
            
          </div>
          <div className="crop-option">
            <button
              id="crop-box-btn"
              onClick={toggleCropBox}
              disabled={cropBox}
            >
              <span
                class="material-symbols-outlined"
                id="crop-box-btn"
                onClick={toggleCropBox}
              >
                crop
              </span>
            </button>
          </div>
          <div className="flip-horizontal-option">
            <span
              class="material-symbols-outlined"
              onClick={() => {
                setFlipRotate((prev) => ({
                  ...prev,
                  flipHorizontal: prev.flipHorizontal === 1 ? -1 : 1,
                }));
              }}
            >
              flip
            </span>
          </div>
          <div className="flip-vertical-option">
            <span
              class="material-symbols-outlined"
              id="flipVertical"
              onClick={() => {
                setFlipRotate((prev) => ({
                  ...prev,
                  flipVertical: prev.flipVertical === 1 ? -1 : 1,
                }));
              }}
            >
              flip
            </span>
          </div>
          <div className="removeBackground">
            <span class="material-symbols-outlined" onClick={handleRemoveBG}>
              background_replace
            </span>
          </div>
          <div className="filters-options">
            <span class="material-symbols-outlined">style</span>
          </div>
        </div>
        <div className="expanded-options">
        <Settings />
          </div>
        <div
          id="image-preview"
          className={`image-canvas ${appliedFilter}`}
        ></div>
      </div>
      <div className="cssGram-filters">
        {/* Render filter previews */}
        {filters.map((filter) => (
          <img
            key={filter}
            className={`filter-preview ${filter} ${
              appliedFilter === filter ? "selected" : ""
            }`}
            onClick={() => handleApplyFilter(filter)} // Pass the filter to the function
            alt={filter}
            src={image}
          />
        ))}
      </div>
    </>
  );
};

export default ImagePreview;
