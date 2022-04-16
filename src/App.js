import "./App.css";
import React, { useEffect } from "react";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas("c");
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: "blue",
      angle: 10,
      top: 20,
      left: 20,
    });
    const textbox = new fabric.Text("Click on the Rectangle to move it.", {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
    });

    // fabric.Image.fromURL(frog, function (oImg) {
    //   oImg.scale(0.1).set({ left: 350, top: 150, angle: 90 });
    //   canvas.add(oImg);
    // });

    // canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    // canvas.isDrawingMode = true;
    // canvas.freeDrawingBrush.width = 10;

    // canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    // canvas.freeDrawingBrush.width = 10;
    // canvas.isDrawingMode = true;

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
