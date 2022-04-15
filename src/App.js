import "./App.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

function App() {
  React.useEffect(() => {
    const canvas = new fabric.Canvas("c");
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: "blue",
      angle: 10,
      top: 20,
      left: 20,
    });
    const textbox = new fabric.Textbox("Click on the Rectangle to move it.", {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
    });
    canvas.add(textbox);
    canvas.add(rect);

    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="app">
      <div>
        <h1>Canvas Playground</h1>
        <canvas id="c" width="500" height="400" />
      </div>
    </div>
  );
}

export default App;
