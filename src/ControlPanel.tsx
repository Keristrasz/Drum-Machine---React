import "./App.css";
import Bass from "./Bass";
import Power from "./Power";
import Volume from "./Volume";
import {Props} from "./App"

const ControlPanel: React.FC<Props> = ({
  setPower,
  power,
  bass,
  setBass,
  volume,
  setVolume,
  conditionalRender,
}) => {
  return (
    <div id="panel">
      <Power power={power} setPower={setPower} />
      <Volume volume={volume} setVolume={setVolume} conditionalRender={conditionalRender} />
      <Bass bass={bass} setBass={setBass} />
    </div>
  );
};

export default ControlPanel;