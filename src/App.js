// import "./App.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

function App() {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 500,
      width: 500,
      backgroundColor: "#B9F8D3",
    });
  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas</h1>
      <canvas id="canvas" />
    </div>
  );
}

export default App;
