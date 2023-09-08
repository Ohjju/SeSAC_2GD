import { useState } from "react";

export default function PracticeUseState() {
  const [num, setNum] = useState(0);

  let varibale = 0;

  function setVariable() {
    varibale = varibale + 1;
    console.log(`변수(variable) : ${varibale} / 스테이트(num): ${num}`);
  }
  return (
    <div>
      <div>{num}</div>
      <div>{num > 7 ? "😊" : "😂"}</div>

      <button
        onClick={() => {
          setNum(num + 1);
          setVariable();
        }}
      >
        1 증가
      </button>
      <button onClick={() => setNum(num - 1)}>1 감소</button>
    </div>
  );
  
}
