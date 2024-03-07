import ImageUpload from "../ImageUpload";
import ImagePreview from "../ImagePreview";
import { useContext } from "react";
import { ImageEditorContext } from "../ImageEditorProvider";
import Navbar from "../Navbar/Navbar";
import Loading from "../../assets/images/loader.gif"


const ImageEditor = () => {
    const { loadedImage, isLoading } = useContext(ImageEditorContext);
    return (
        <>
            {!loadedImage && <><Navbar /><ImageUpload /></>}
            {loadedImage &&
                <div className="main-editor-container">
                    {isLoading && (
                        <div className="loading-container">
                            <div className="loader">
                                <img src={Loading} alt="loading" className="loading-image" />
                            </div>
                        </div>
                    )}
                    <ImagePreview />
                </div>
            }
        </>
    );
};


export default ImageEditor;
