import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

export default function Volume({ volume, setVolume, conditionalRender }) {
  function handleVolume(e) {
    setVolume(e.target.value);
    console.log(volume);
  }

  

  return (
    <div id="volume">
       {conditionalRender.condition && <div id="popup"><h4 >{conditionalRender.conditionText}</h4></div>  }
      
     <div className="d-flex justify-content-center mt-3">VOLUME</div>
      <div className="d-flex justify-content-center text-primary">{volume}</div>
      <div className="d-flex justify-content-center">
        <input
          className="form-range mx-5"
          type="range"
          defaultValue={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}
