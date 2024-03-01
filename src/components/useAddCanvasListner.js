import { useEffect } from "react";

const useAddCanvasListner = ({
  canvas,
  mouseDown,
  mouseUp,
  mouseMove,
  mouseOver,
  handleZoomInAndOut,
}) => {
  useEffect(() => {
    if (canvas) {
      canvas.addEventListener("mousedown", mouseDown, false);
      canvas.addEventListener("mousemove", mouseMove, false);
      canvas.addEventListener("mouseup", mouseUp, false);
      canvas.addEventListener("mouseover", mouseOver, false);
      canvas.addEventListener("wheel", handleZoomInAndOut, { passive: false });
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousedown", mouseDown, false);
        canvas.removeEventListener("mousemove", mouseMove, false);
        canvas.removeEventListener("mouseup", mouseUp, false);
        canvas.removeEventListener("mouseover", mouseOver, false);
        canvas.removeEventListener("wheel", handleZoomInAndOut, { passive: false });
      }
    };
  }, [mouseDown, mouseMove, mouseUp, mouseOver, handleZoomInAndOut, canvas]);
};

export default useAddCanvasListner;
