import React from "react";
import { useState, useEffect, useRef } from "react";

function Practice() {
  const itemArray = ["weer", "ertyy", "dfghh"];

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const videoUrl = "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Big_Buck_Bunny_first_23_seconds_1080p.ogv/Big_Buck_Bunny_first_23_seconds_1080p.ogv.480p.vp9.webm";
  //  useEffect -ს გამოყენება
  useEffect(() => {
    console.log("I am here");
  }, [inputValue]);
  // count ის მომატება
  const addFunc = () => {
    setCount(count + 1);
    if (count >= 5) {
      return;
    }
  };
  const changeColor = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "green";
    }
  };

  return (
    <>
      {/* map ით ელემენტების გამოტანა */}
      <div>
        {itemArray.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      {/* ღილაკზე დაჭერით count -ის გაზრდა */}
      <div style={{ backgroundColor: "greenyellow" }}>
        {count}
        <button style={{ backgroundColor: "blue" }} onClick={addFunc}>
          click
        </button>
      </div>
      {/* input ში ჩაწერილი ველიუს ამოღება */}
      <div>
        <input
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
      </div>
      {/* useRef ის გამოყენება */}
      <div>
        <button ref={buttonRef} onClick={changeColor}>
          press
        </button>
      </div>
      {/* player */}

      <video ref={videoRef}>
        <source src={videoUrl} type="video/webm"></source>
      </video>
      <button
      onClick={()=>{
        if(videoRef.current.paused){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
      }}
      >play/pause</button>
    </>
  );
}

export default Practice;
