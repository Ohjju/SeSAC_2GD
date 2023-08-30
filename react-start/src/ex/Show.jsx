import { useState } from "react";

export default function Handler() {
  const [text, setText] = useState("사라져라");
  const [show, setEvent] = useState("block");
  //   const [opacity, setOpacity] = useState(1);
  // 이건 리더님 설명

  function display() {
    setText(!text);
    setEvent(!show);
    // const newOpacity = opacity == 1 ? 0 : 1;
    // setOpacity(newOpacity);
  }

  return (
    <>
      <button onClick={display}>{text ? "사라져라" : "보여라"}</button>
      <h1>{show ? "안녕하세요" : ""}</h1>
      {/* <h1 style={{ opacity }}>안녕하세요</h1> */}
    </>
  );
}
