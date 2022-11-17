import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Bass from "./Bass";
import Power from "./Power";
import Volume from "./Volume";

export default function ControlPanel({
  setPower,
  power,
  bass,
  setBass,
  volume,
  setVolume,
  conditionalRender,
  conditionalRenderText,
}) {
  return (
    <div id="panel">
      <Power power={power} setPower={setPower} />
      <Volume volume={volume} setVolume={setVolume} conditionalRender={conditionalRender} />
      <Bass bass={bass} setBass={setBass} />
    </div>
  );
}
