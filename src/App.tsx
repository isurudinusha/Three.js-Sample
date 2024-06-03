import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/UBa-FGhcDzcjg1Z6/scene.splinecode");
    }
  }, []);

  return (
    <>
      <div className="rotate">Rotate Me</div>

      <div className="canvas">
        <canvas id="canvas3d" ref={canvasRef} />
      </div>
      <h2>By Isuru Dinusha</h2>
    </>
  );
}

export default App;
