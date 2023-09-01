import { useRef } from "react";

function DOMComponent() {
  //const 변수명 = useRef(초기값); 보통 초기값을 null로 넣음 - 에러값 방지
  const inputRef = useRef(null);

  const getInput = () => {
    //DOM에서 INPUT을 선택해 값을 가져오는 역할
    const input = document.getElementById("input");
    console.log("input value: ", input.value);
  };

  const getInput2 = () => {
    //inputRef.current = <input type="text" id="input" ref ={inputRef}>
    console.log("input value2: ", inputRef.current?.value);
    // if (!inputRef.current) return;
    // inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" id="input" ref={inputRef}></input>
      <button onClick={getInput}> 버튼</button>
      <button onClick={getInput2}> 버튼2</button>
    </div>
  );
}

export default DOMComponent;
