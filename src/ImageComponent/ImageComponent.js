import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const ImageComponent = ({ image, width, height }) => {
  const [img] = useImage(image.url);

  return (
    <Image
      image={img}
      width={200}
      height={200}
      x={width}
      x={height}
      draggable
      onDragStart={() => {
        image.isDragging = true;
      }}
      onDragEnd={(e) => {
        image.isDragging = false;
        image.x = e.target.x();
        image.y = e.target.y();
      }}
    />
  );
};

export default ImageComponent;
