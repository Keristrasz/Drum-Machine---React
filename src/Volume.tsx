import "./App.css";
import React from "react";
import {Props} from "./App"

const Volume: React.FC<Props> = ({ volume, setVolume, conditionalRender }) => {
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div id="volume">
      {conditionalRender.condition && <div id="popup"><h4>{conditionalRender.conditionText}</h4></div>}
      <div className="d-flex justify-content-center mt-3">VOLUME</div>
      <div className="d-flex justify-content-center text-primary">{volume}</div>
      <div className="d-flex justify-content-center">
        <input
          className="form-range mx-5"
          type="range"
          defaultValue={volume.toString()}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export default Volume;
