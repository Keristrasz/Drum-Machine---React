import React from 'react';
import { audioList } from './audioList';
import {Props} from "./App"

const Letter: React.FC<Props> = ({ letter, handleAudio }) => {
  return (
    <div className="col-4">
      <audio id={letter} src={audioList[letter].src} />
      <button
        type="button"
        className="border border-info btn btn-secondary btn-lg drum-pad"
        onClick={() => handleAudio(audioList[letter].name)}
        value={letter}
      >
        {letter}
      </button>
    </div>
  );
};

export default Letter;