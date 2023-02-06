import "./App.css";
import React from "react";
import { Props } from "./App";

//the component is converted from a functional component to a React.FC type. An interface named Props is imported to describe the shape of the props object for the component. The Props interface has two properties: bass and setBass, both of the required type. The type of the Props prop is React.Dispatch<React.SetStateAction<boolean>>, which is a type provided by the React library that represents a state update function.

const Bass: React.FC<Props> = ({ setBass, bass }) => {
  const handleBass = () => {
    setBass(!bass);
  };

  return (
    <div id="bass">
      <div className="d-flex justify-content-center mt-3 mb-0">BANK</div>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          className="form-check-input "
          type="checkbox"
          role="switch"
          onChange={handleBass}
        />
      </div>
    </div>
  );
};

export default Bass;
