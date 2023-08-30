import { useState } from "react";

export default function FunctionState() {
  // 4. state 이용해서 누르면 계속 바뀌게
  const [showEnglish, setShowEnglish] = useState(true);
  return (
    <div>
      <div>{showEnglish ? "apple" : "사과"}</div>
      <button onClick={() => setShowEnglish(!showEnglish)}>
        {showEnglish ? "한글로 변경" : "영어로 변경"}
      </button>
    </div>
  );
  // 1. 일반 변수 ver
  // let apple = "사과";
  // function inEng() {
  //   const content = document.querySelector(".state .apple");
  //   content.innerText = "apple";
  //   apple = "apple";
  // }
  // return (
  //   <div className="state">
  //     <div className="apple">사과</div>
  //     <div>{apple}</div>
  //     <button onClick={() => inEng()}>영어로 바꾸기</button>
  //   </div>
  // );
  // 2. state 이용하는 ver
  //   const [apple, setApple] = useState("사과");
  //   //   let apple = '사과' 처럼 된 것!
  //   //   import시켜줘야 useState 사용 가능
  //   return (
  //     <div>
  //       <div>{apple}</div>
  //       <button onClick={() => setApple("apple")}>영어로 변경</button>
  //     </div>
  //   );
  // 3. 일반 변수 이용해서 누르면 계속 바뀌게
  // function changeLang() {
  //   const apple = document.querySelector(".state div");
  //   apple.innerText === "사과"
  //     ? (apple.innerText = "apple")
  //     : (apple.innerText = "사과");
  // }
  // return (
  //   <div className="state">
  //     <div>사과</div>
  //     <button onClick={() => changeLang()}>언어 변경</button>
  //   </div>
  // );
}
