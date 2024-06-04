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
      <div className="canvas">
        <canvas className="canvas3d" id="canvas3d" ref={canvasRef} />
      </div>
      <h4 className="credits">By Isuru Dinusha</h4>
    </>
  );
}

export default App;
