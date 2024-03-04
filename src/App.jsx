import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
import ImageEditorProvider from "./components/ImageEditorProvider";
import Navbar from "./components/Navbar/Navbar";
import ImageEditor from "./components/ImageEditor/ImageEditor"

function App() {
  return (
    <BrowserRouter>
      <ImageEditorProvider>
        <Navbar />
        <ImageEditor />
      </ImageEditorProvider>
    </BrowserRouter >
  );
}

export default App;
