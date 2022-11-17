import "./App.css";
import ControlPanel from "./ControlPanel";
import Letters from "./Letters";
import React from "react";
import ReactDOM from "react-dom/client";


export default function App() {
  const [power, setPower] = React.useState(false);
  const [bass, setBass] = React.useState(true);
  const [volume, setVolume] = React.useState(50);
  const [conditionalRender, setConditionalRender] = React.useState({condition: false,
                                                                   conditionText: "PlaceHolder Text"});
 

  return (
    <main>
      <div id="drum-machine">
        
        <Letters power={power} bass={bass} volume={volume} conditionalRender = {conditionalRender} setConditionalRender={setConditionalRender} />
        <ControlPanel
          setPower={setPower}
          power={power}
          setBass={setBass}
          bass={bass}
          volume={volume}
          setVolume={setVolume}
          conditionalRender = {conditionalRender}
          
        />
      </div>
    </main>
  );
}
