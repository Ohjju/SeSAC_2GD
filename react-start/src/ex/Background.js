import { useRef } from "react";
import { useState } from "react";

function Background() {
  const [color, setColor] = useState("");
  const inputRef = useRef(null);

  function ChangeColor() {
    //오류 방지위해서 왠만하면 써주기
    if (!inputRef.current) return;

    //setColor에 현재 입력된 값 넣어줌
    setColor(inputRef.current.value);
    //값 초기화
    inputRef.current.value = "";
    //포커스
    inputRef.current.focus();
  }

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <input ref={inputRef}></input>
        <br></br>
        <button onClick={ChangeColor}>색 적용</button>
      </div>
    </>
  );
}
export default Background;
