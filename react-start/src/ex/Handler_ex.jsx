import { useState } from "react";

export default function Handler() {
  const [text, changeText] = useState("Hello World!");

  return (
    <>
      <h1>{text}</h1>
      <button onClick={() => changeText("Goodbye World!")}>클릭</button>
    </>
  );
}
