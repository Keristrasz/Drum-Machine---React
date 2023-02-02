import "./App.css";
import React from "react";
import { audioList } from "./audioList";
import Letter from "./Letter";
import {Props} from "./App"

const Letters: React.FC<Props> = ({ power, bass, volume, conditionalRender, setConditionalRender }) => {

  const handleAudio = (letter: string) => {
    if (!power) {
      let music: HTMLAudioElement;
      if (bass) {
        music = new Audio(audioList[letter].src);
        setConditionalRender({ condition: true, conditionText: audioList[letter].panelText });
      } else if (!bass) {
        music = new Audio(audioList[letter].basssrc);
        setConditionalRender({ condition: true, conditionText: audioList[letter].altPanelText });
      }
      setTimeout(() => (setConditionalRender({ condition: false })), 2000);
      music.volume = volume / 100;
      music.play();
    }
  };

  const myRef = React.useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (myRef.current) {
      const domLetter = [...myRef.current.children];

      if (audioList.hasOwnProperty(event.key) || audioList.hasOwnProperty(event.key.toUpperCase())) {
        handleAudio(audioList[event.key.toUpperCase()].name);

        domLetter.forEach(el => {
          if (el.innerText === event.key ||
            el.id === event.key || el.innerText === event.key.toUpperCase() ||
            el.id === event.key.toUpperCase()
          ) {
            (el.children[1] as HTMLButtonElement).style.backgroundColor = "red";
            setTimeout(
              () => ((el.children[1] as HTMLButtonElement).style.backgroundColor = "#6c757d"),
              200
            );
          }
        });
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, power, bass]);

  const allButtonLetters = Object.keys(audioList).filter(el => el !== "Y");
  const renderAllButtons = allButtonLetters.map(el => (
    <Letter key={el} letter={el} handleAudio={handleAudio} />
  ));

  return (
    <div id="drum-pad-panel" className="container">
      <div ref={myRef} id="display" className="row">
        {renderAllButtons}
      </div>
    </div>
  );
};

export default Letters;