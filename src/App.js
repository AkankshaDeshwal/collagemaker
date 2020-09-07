import React from "react";
import "./App.css";
import Gallary from "./Gallary/Gallary";
import { CanvasContext } from "./context/canvas-context";
import Canvas from "./Canvas/Canvas";
import { useCanvas } from "./hooks/useCanvas";

const App = () => {
  const { canvasImageArray, addImageToCanvas, refreshCanvas } = useCanvas(
    window.innerWidth * 0.7,
    window.innerHeight * 0.7
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <CanvasContext.Provider
          value={{
            canvasImageArray: canvasImageArray,
            addImageToCanvas: addImageToCanvas,
            refreshCanvas: refreshCanvas,
          }}
        >
          {/* Canvas Display */}
          <div className="col-md-9 ">
            <Canvas />
            <div
              className="container-fluid mt-4 d-flex justify-content-center"
              style={{ backgroundColor: "#ffecc0" }}
            >
              <h1 className="text">Make A Collage</h1>
            </div>
          </div>

          {/* Gallary Images */}
          <div className="col-md-3 gallary-col ">
            <Gallary />
          </div>
        </CanvasContext.Provider>
      </div>
    </div>
  );
};

export default App;
