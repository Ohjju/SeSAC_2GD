import { useState, useRef } from "react";

export default function SetText() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const checkString = () => {
    console.log("state string:", text);
    console.log("state ref:", inputRef.current?.value);
  };

  const onClickState = () => {
    if (typeof inputRef.current?.value == "string") {
      setText(inputRef.current.value);
      console.log("text 변경완료");
    }
  };

  // 2. 변수로 ref 사용
  const refVal = useRef<number>(0);

  const onClickRef = () => {
    refVal.current += 1;
    console.log("ref:", refVal.current);
  };

  return (
    <>
      <h2>useRef 사용해보기</h2>
      <p>1. Dom에 접근하는 ref</p>
      <input type="text" ref={inputRef} onChange={checkString} />
      <button onClick={onClickState}>state 변경</button>
      <div>state string: {text}</div>
      <div>ref string: {inputRef.current?.value}</div>

      <p>2. 변수로 사용하는 ref</p>
      <button onClick={onClickRef}>+1 (ref)</button>
      <div>ref value: {refVal.current}</div>
    </>
  );
}
