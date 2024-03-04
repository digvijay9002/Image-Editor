import { useContext } from "react";
import { ImageEditorContext } from "./ImageEditorProvider";

const Flip = () => {
  const { setFlipRotate } = useContext(ImageEditorContext);
  return (
    <div className="flip-container">
          <span class="material-symbols-outlined" onClick={() => {
          setFlipRotate((prev) => ({
            ...prev,
            flipHorizontal: prev.flipHorizontal === 1 ? -1 : 1,
          }));
        }}>
             flip
          </span>

             <span class="material-symbols-outlined" id="flipVertical"  onClick={() => {
          setFlipRotate((prev) => ({
            ...prev,
            flipVertical: prev.flipVertical === 1 ? -1 : 1,
          }));
        }}>
              flip 
          </span>
      {/* <button
        onClick={() => {
          setFlipRotate((prev) => ({
            ...prev,
            rotate: prev.rotate - 90,
          }));
        }}
      >
        Rotate Left
      </button>
      <button
        onClick={() => {
          setFlipRotate((prev) => ({
            ...prev,
            rotate: prev.rotate + 90,
          }));
        }}
      >
        Rotate Right
      </button> */}
    </div>
  );
};

export default Flip;
