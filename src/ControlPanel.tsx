import "./App.css";
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
