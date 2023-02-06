import "./App.css";
import ControlPanel from "./ControlPanel";
import Letters from "./Letters";
import React, { useState } from "react";

export interface Props {
  power: boolean;
  setPower: (power: boolean) => void;
  bass: boolean;
  setBass: (bass: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  conditionalRender: {
    condition: boolean;
    conditionText: string;
  };
  setConditionalRender: (conditionalRender: {
    condition: boolean;
    conditionText: string;
  }) => void;
}

const App: React.FC<Props> = (props) => {
  const [power, setPower] = useState(false);
  const [bass, setBass] = useState(true);
  const [volume, setVolume] = useState(50);
  const [conditionalRender, setConditionalRender] = useState({
    condition: false,
    conditionText: "",
  });

  return (
    <main>
      <div id="drum-machine">
        <Letters
          setPower={setPower}
          power={power}
          setBass={setBass}
          bass={bass}
          volume={volume}
          setVolume={setVolume}
          conditionalRender={conditionalRender}
          setConditionalRender={setConditionalRender}
        />
        <ControlPanel
          setPower={setPower}
          power={power}
          setBass={setBass}
          bass={bass}
          volume={volume}
          setVolume={setVolume}
          conditionalRender={conditionalRender}
          setConditionalRender={setConditionalRender}
        />
      </div>
    </main>
  );
};

export default App;
