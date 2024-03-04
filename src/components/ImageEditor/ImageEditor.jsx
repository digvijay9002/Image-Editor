import ImageUpload from "../ImageUpload";
import ImagePreview from "../ImagePreview";
import Footer from "../Footer";
import { useContext } from "react";
import { ImageEditorContext } from "../ImageEditorProvider";

const ImageEditor = () => {
    const { loadedImage } = useContext(ImageEditorContext);
    return (
        <>
            {!loadedImage && <ImageUpload />}
            {loadedImage && (
                <>
                    <div className="main-editor-container">
                        <Footer />
                        <ImagePreview />
                    </div>
                </>
            )}
        </>
    );
};

export default ImageEditor;
