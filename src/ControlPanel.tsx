import "./App.css";
import Bass from "./Bass";
import Power from "./Power";
import Volume from "./Volume";
import { Props } from "./App";

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
      <Power
        power={power}
        setPower={setPower}
        bass={false}
        setBass={function (bass: boolean): void {
          throw new Error("Function not implemented.");
        }}
        volume={0}
        setVolume={function (volume: number): void {
          throw new Error("Function not implemented.");
        }}
        conditionalRender={{
          condition: false,
          conditionText: "",
        }}
        setConditionalRender={function (conditionalRender: {
          condition: boolean;
          conditionText: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Volume
        volume={volume}
        setVolume={setVolume}
        conditionalRender={conditionalRender}
        power={false}
        setPower={function (power: boolean): void {
          throw new Error("Function not implemented.");
        }}
        bass={false}
        setBass={function (bass: boolean): void {
          throw new Error("Function not implemented.");
        }}
        setConditionalRender={function (conditionalRender: {
          condition: boolean;
          conditionText: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Bass
        bass={bass}
        setBass={setBass}
        power={false}
        setPower={function (power: boolean): void {
          throw new Error("Function not implemented.");
        }}
        volume={0}
        setVolume={function (volume: number): void {
          throw new Error("Function not implemented.");
        }}
        conditionalRender={{
          condition: false,
          conditionText: "",
        }}
        setConditionalRender={function (conditionalRender: {
          condition: boolean;
          conditionText: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default ControlPanel;
