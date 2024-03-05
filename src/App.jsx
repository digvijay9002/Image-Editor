import "./App.css";
import ImageEditorProvider from "./components/ImageEditorProvider";
import ImageEditor from "./components/ImageEditor/ImageEditor"

function App() {
  return (
    <ImageEditorProvider>
      <ImageEditor />
    </ImageEditorProvider>
  );
}

export default App;
