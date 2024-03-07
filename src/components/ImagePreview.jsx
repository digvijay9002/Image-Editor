import { useContext, useState } from "react";
import { ImageEditorContext } from "./ImageEditorProvider";
import Settings from "./Settings";
import "../App.css";
import Footer from "./Footer";
import CssGramFilters from "./CssGramFilters";

const ImagePreview = () => {
  const {
    toggleCropBox,
    handleRemoveBG,
    appliedFilter,
    setFlipRotate,
  } = useContext(ImageEditorContext);

  const editOptions = {
    tune: 'tune',
    removeBG: 'removeBG',
    flipHorizontal: 'flipHorizontal',
    flipVertical: 'flipVertical',
    crop: 'crop',
    filters: 'filters'
  };
  const [activeOption, setActiveOption] = useState(editOptions.tune);

  const showActiveOptionsCompList = {
    tune: <Settings />,
    filters: <CssGramFilters />
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="image-preview-container">
      <div className="options-wrapper">
        <div className="options-container">
          <div className={`adjustment-options ${activeOption === editOptions.tune ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              id="adjustment-options"
              onClick={() => handleOptionClick(editOptions.tune)}
            >
              tune
            </span>
          </div>
          <div className={`filters-options ${activeOption === editOptions.filters ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              onClick={() => handleOptionClick(editOptions.filters)}
            >
              style
            </span>
          </div>
          <div className={`crop-option ${activeOption === editOptions.crop ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              id="crop-box-btn"
              onClick={() => {
                handleOptionClick(editOptions.crop);
                toggleCropBox();
              }}
            >
              crop
            </span>
          </div>
          <div className={`flip-horizontal-option ${activeOption === editOptions.flipHorizontal ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                handleOptionClick(editOptions.flipHorizontal);
                setFlipRotate((prev) => ({
                  ...prev,
                  flipHorizontal: prev.flipHorizontal === 1 ? -1 : 1,
                }));
              }}
            >
              flip
            </span>
          </div>
          <div className={`flip-vertical-option ${activeOption === editOptions.flipVertical ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              id="flipVertical"
              onClick={() => {
                handleOptionClick(editOptions.flipVertical);
                setFlipRotate((prev) => ({
                  ...prev,
                  flipVertical: prev.flipVertical === 1 ? -1 : 1,
                }));
              }}
            >
              flip
            </span>
          </div>
          <div className={`removeBackground ${activeOption === editOptions.removeBG ? 'active' : ''}`}>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                handleOptionClick(editOptions.removeBG);
                handleRemoveBG();
              }}
            >
              background_replace
            </span>
          </div>
        </div>
        {(activeOption === editOptions.tune || activeOption === editOptions.filters) && <div className={`expanded-options`}>
          {showActiveOptionsCompList[activeOption]}
        </div>}
      </div>
      <div className="image-canvas-btn-wrapper">

        <div id="image-preview" className={`image-canvas ${appliedFilter}`}>
          {/* Your image canvas */}
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default ImagePreview;
