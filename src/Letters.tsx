import "./App.css";
import React from "react";
import { audioList } from "./audioList.js";
import Letter from "./Letter";

export default function Letters({ power, bass, volume, conditionalRender, setConditionalRender, }) {

  function handleAudio(letter) {
    if (!power) {
      if (bass) {
        var music = new Audio(audioList[letter].src);
        setConditionalRender({ condition: true, conditionText: audioList[letter].panelText });
      } else if (!bass) {
        var music = new Audio(audioList[letter].basssrc);
        setConditionalRender({ condition: true, conditionText: audioList[letter].altPanelText });
      }
      setTimeout(() => (setConditionalRender({ condition: false })), 2000);
      music.volume = volume / 100;
      music.play();

      //Condition rendering, every call of function always makes condition false after 2 second, even with many calls at once

    }
  }
  let myRef = React.useRef();

  //Event listener to register clicks on keyboard

  let handleKeyDown = (event) => {
    let domLetter = [...myRef.current.children];

    if (audioList.hasOwnProperty([event.key]) || audioList.hasOwnProperty([event.key.toUpperCase()])) {

      handleAudio(audioList[event.key.toUpperCase()].name);

      //Handle changing backgroundcolor on keyboard press for lowercase

      domLetter.forEach((el) => {
        if (el.innerText === event.key ||
          el.id === event.key || el.innerText === event.key.toUpperCase() ||
          el.id === event.key.toUpperCase()
        ) {
          el.children[1].style.backgroundColor = "red";
          setTimeout(
            () => (el.children[1].style.backgroundColor = "#6c757d"),
            200
          );
        }
      });
    }
  };

  React.useEffect(() => {

    window.addEventListener("keydown", handleKeyDown);
    //clear event listener after component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, power, bass]);

  const allButtonLetters = Object.entries(audioList).map(el => el.slice(0, 1)).flat().filter(el => el != "Y")

  const renderAllButtons = allButtonLetters.map(el => {
    return (
      <Letter key={el} letter={el} handleAudio={handleAudio} />
    )
  })

  return (
    <div id="drum-pad-panel" className="container">
      <div ref={myRef} id="display" className="row">
        {renderAllButtons}
      </div>
    </div>
  );
}
