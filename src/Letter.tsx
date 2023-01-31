import "./App.css";
import { audioList } from "./audioList.js";

export default function Letter({ letter, handleAudio }) {

  return (
      <div className="col-4">
        {" "}
        <audio id={ letter } src={audioList[letter].src}>
          {" "}
        </audio>
        <button
          type="button"
          className="border border-info btn btn-secondary btn-lg drum-pad"
          onClick={() => handleAudio(audioList[letter].name)}
          value={ letter }
        >
          { letter }
        </button>
      </div>
  );
}
