import React, { useState, useContext } from "react";
import "./Canvas.css";
import { Stage, Layer, Image } from "react-konva";
import { CanvasContext } from "../context/canvas-context";
import ImageComponent from "../ImageComponent/ImageComponent";

const Canvas = (props) => {
  const canvasContext = useContext(CanvasContext);
  const [stageRef, setStageRef] = useState();

  return (
    <React.Fragment>
      {/* Refresh Canvas Button */}
      <button
        type="button"
        onClick={canvasContext.refreshCanvas}
        className="btn btn-warning mt-1 mb-1"
      >
        Refresh
      </button>
      {/* Canvas Stage */}
      <Stage
        width={window.innerWidth * 0.7}
        height={window.innerHeight * 0.7}
        style={{ border: "2px solid grey" }}
        ref={(node) => {
          setStageRef(node);
        }}
      >
        <Layer>
          {canvasContext.canvasImageArray.map((image) => {
            return (
              <ImageComponent
                key={image.id}
                width={stageRef.width()}
                height={stageRef.height()}
                image={image}
              />
            );
          })}
        </Layer>
      </Stage>
    </React.Fragment>
  );
};

export default Canvas;
