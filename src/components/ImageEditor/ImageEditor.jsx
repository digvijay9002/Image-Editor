import ImageUpload from "../ImageUpload";
import ImagePreview from "../ImagePreview";
import Footer from "../Footer";
import { useContext } from "react";
import { ImageEditorContext } from "../ImageEditorProvider";
import Navbar from "../Navbar/Navbar";

const ImageEditor = () => {
    const { loadedImage } = useContext(ImageEditorContext);
    return (
        <>
            {!loadedImage && <><Navbar /><ImageUpload /></>}
            {loadedImage &&
                <div className="main-editor-container">
                    <ImagePreview />
                </div>
            }
        </>
    );
};


export default ImageEditor;
