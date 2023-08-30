import { useState } from "react";

export default function Color() {
  const [text, setText] = useState("검정색글씨");
  const [color, setColor] = useState("black");

  function changeRed() {
    setText("빨간색 글씨");
    setColor("red");
  }

  function changeBlue() {
    setText("파란색 글씨");
    setColor("blue");
  }

  return (
    <>
      <div style={{ color }}>{text}</div>
      <button onClick={() => changeRed()}>빨간색</button>
      <button onClick={() => changeBlue()}>파란색</button>
    </>
  );
}
