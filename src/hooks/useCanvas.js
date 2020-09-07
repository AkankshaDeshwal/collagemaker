import { useState } from "react";

export const useCanvas = (width, height) => {
  const [canvasImageArray, setCanvasImageArray] = useState([]);

  const addImageToCanvas = (url, id) => {
    setCanvasImageArray(
      canvasImageArray.concat([
        {
          url: url,
          x: null,
          y: null,
          id: id,
          isDragging: false,
        },
      ])
    );
  };
  const refreshCanvas = (e) => {
    setCanvasImageArray([]);
  };

  return { canvasImageArray, addImageToCanvas, refreshCanvas };
};
