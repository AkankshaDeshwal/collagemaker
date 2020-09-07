import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import "./Gallary.css";
import { CanvasContext } from "../context/canvas-context";
import { Button } from "react-bootstrap";

const Gallary = (props) => {
  const [images, setImages] = useState([]);
  const canvasContext = useContext(CanvasContext);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestImages = async () => {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            params: { _limit: 100 },
          }
        );

        setImages(data);
      } catch (err) {}
    };
    console.log(refresh);
    requestImages();
    setIsLoading(false);
  }, [refresh]);

  return (
    <React.Fragment>
      {/* Refresh Gallary Button */}
      <button
        type="button"
        onClick={() => setRefresh(!refresh)}
        className="btn btn-primary mt-1"
      >
        Refresh
      </button>
      {/* Gallary Display */}
      {isLoading && <p>Loading...</p>}
      {!isLoading && images && (
        <div>
          {images.map((x) => (
            <div className="image-box mt-2" key={x.id}>
              <img
                id={x.id}
                loading="lazy"
                src={x.url}
                alt="la"
                onClick={(e) => canvasContext.addImageToCanvas(x.url, x.id)}
              />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Gallary;
