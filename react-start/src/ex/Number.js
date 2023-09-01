import { useRef } from "react";

function Number() {
  const inputRef = useRef(null);
  const num1 = parseInt(Math.random() * 10 + 1);
  const num2 = parseInt(Math.random() * 10);
  const arr = ["+", "-", "*"];
  const op = arr[parseInt(Math.random() * 2 + 1)];
  // num1 + op + num2 하고 싶으면
  // eval(문자열) -> 문자열을 계산해줌 BUT 권장하지 않음!!!
  // return eval(num1+op+num2)

  function calc() {
    if (op == "+") {
      return num1 + num2;
    } else if (op == "-") {
      return num1 - num2;
    } else if (op == "*") {
      return num1 * num2;
    }
  }

  const result = calc();
  console.log(result);

  function re() {
    // 채점
    if (inputRef.current.value == result) {
      alert("정답입니다.");
    } else if (inputRef.current.value != result) {
      alert("오답입니다");
    }
    //값 초기화
    inputRef.current.value = "";
    //포커스
    inputRef.current.focus();
  }

  return (
    <>
      {num1} {op} {num2}
      <br></br>
      <input ref={inputRef}></input>
      <br></br>
      <button onClick={re}>정답 제출</button>
    </>
  );
}
export default Number;
