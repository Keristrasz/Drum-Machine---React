import { audioList } from "./audioList";

interface LetterProps {
  letter: string;
  handleAudio: (letter: string) => void;
}

const Letter: React.FC<LetterProps> = ({ letter, handleAudio }) => {
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
