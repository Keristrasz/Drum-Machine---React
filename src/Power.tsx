import "./App.css";
import { Props } from "./App";

const Power: React.FC<Props> = ({ setPower, power }) => {
  function handlePower() {
    setPower(!power);
  }

  return (
    <div id="power">
      <div className="d-flex justify-content-center mt-3">
        <h4 className="mb-1">POWER</h4>
      </div>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          className="form-check-input "
          defaultChecked
          type="checkbox"
          role="switch"
          onChange={handlePower}
        />
      </div>
    </div>
  );
};

export default Power;
