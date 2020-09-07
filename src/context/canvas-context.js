import { createContext } from "react";

export const CanvasContext = createContext({
  canvasImageArray: [],
  addImageToCanvas: () => {},
  refreshCanvas: () => {},
});
