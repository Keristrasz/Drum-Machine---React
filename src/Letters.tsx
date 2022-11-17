import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { audioList } from "./audioList.js";

export default function Letters({ power, bass, volume, conditionalRender,  setConditionalRender,}) {
  
  //Is it better to render all buttons through map (in state) to change their attributes?

  function handleAudio(letter) {
    // Log ukazuje true, ale je ve skutečnosti false
    if (!power) {
      if (bass) {
        var music = new Audio(audioList[letter].src);
        setConditionalRender({condition: true, conditionText: audioList[letter].panelText});
      setTimeout(() => (setConditionalRender({condition: false})), 2000);
      } else if (!bass) {
        var music = new Audio(audioList[letter].basssrc);
             setConditionalRender({condition: true, conditionText: audioList[letter].altPanelText});
      setTimeout(() => (setConditionalRender({condition: false})), 2000);
      }
      console.log(volume);
      music.volume = volume / 100;
      music.play();

      //Condition rendering, every call of function always makes condition false after 3 second, even with many calls at once
      
      
   
    }
  }

  let myRef = React.useRef();

  // console.log(buttonRef.current)
  //Event listener to register clicks on keyboard

  let handleKeyDown = (event) => {
    if (audioList.hasOwnProperty([event.key])) {
      handleAudio(audioList[event.key].name);

      //    console.log(myRef.current.children[0].children[1])
      //    console.log(myRef.current.children[5].innerText)

      //Handle changing backgroundcolor on keyboard press for lowercase
      let testChildren = [...myRef.current.children];

      testChildren.forEach((el) => {
        if (el.innerText === event.key || el.id === event.key) {
          el.children[1].style.backgroundColor = "red";
          setTimeout(
            () => (el.children[1].style.backgroundColor = "#6c757d"),
            200
          );
          //   console.log(el.children[1])
          //   console.log(el.children[1].style)
        }
      });
    } else if (audioList.hasOwnProperty([event.key.toUpperCase()])) {
      handleAudio(audioList[event.key.toUpperCase()].name);
      let testChildren = [...myRef.current.children];

      //Handle changing backgroundcolor on keyboard press for uppercase
      testChildren.forEach((el) => {
        if (
          el.innerText === event.key.toUpperCase() ||
          el.id === event.key.toUpperCase()
        ) {
          el.children[1].style.backgroundColor = "red";
          setTimeout(
            () => (el.children[1].style.backgroundColor = "#6c757d"),
            200
          );
          //   console.log(el.children[1])
          //   console.log(el.children[1].style)
        }
      });
    }
  };

  //  console.log(myRef)
  // console.log(myRef.current)

  // let handleFuc = () => {
  // if (myRef.current.children[0].innerText === "Q") {
  //   return console.log(myRef.current.children)
  // }
  //}
  // setTimeout(handleFuc, 200)

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, power, bass]);

  return (
    <>
      <div id="drum-pad-panel" className="container">
        <div ref={myRef} id="display" className="row">
          <div className="col-4">
            {" "}
            <audio id="Q" src={audioList.Q.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              onClick={() => handleAudio(audioList.Q.name)}
              value="Q"
            >
              Q
            </button>
          </div>
          <div className="col-4">
            {" "}
            <audio id="W" src={audioList.W.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="W"
              onClick={() => handleAudio(audioList.W.name)}
              value="W"
            >
              W
            </button>
          </div>
          <div className="col-4">
            {" "}
            <audio id="E" src={audioList.E.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="E"
              onClick={() => handleAudio(audioList.E.name)}
              value="E"
            >
              E
            </button>
          </div>

          <div className="w-100"></div>
          <div className="col-4">
            {" "}
            <audio id="A" src={audioList.A.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="A"
              onClick={() => handleAudio(audioList.A.name)}
              value="A"
            >
              A
            </button>
          </div>

          <div className="col-4">
            {" "}
            <audio id="Q" src={audioList.S.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="S"
              onClick={() => handleAudio(audioList.S.name)}
              value="S"
            >
              S
            </button>
          </div>
          <div className="col-4">
            {" "}
            <audio id="D" src={audioList.D.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="D"
              onClick={() => handleAudio(audioList.D.name)}
              value="D"
            >
              D
            </button>
          </div>

          <div className="w-100"></div>
          <div className="col-4" id="Y">
            {" "}
            <audio id="Z" src={audioList.Z.src}>
              {" "}
            </audio>
            <button
              type="button"
              className="border border-info btn btn-secondary btn-lg drum-pad"
              id="Z"
              onClick={() => handleAudio(audioList.Z.name)}
              value="Z"
            >
              Z
            </button>
          </div>

          <div className="col-4">
            {" "}
            <audio id="X" src={audioList.X.src}>
              {" "}
            </audio>
            <button
              type="button"
              className=" border border-info btn btn-secondary btn-lg drum-pad"
              id="X"
              onClick={() => handleAudio(audioList.X.name)}
              value="X"
            >
              X
            </button>
          </div>
          <div className="col-4">
            {" "}
            <audio id="C" src={audioList.C.src}>
              {" "}
            </audio>
            <button
              type="button"
              className=" border border-info btn btn-secondary btn-lg drum-pad"
              id="C"
              onClick={() => handleAudio(audioList.C.name)}
              value="C"
            >
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
