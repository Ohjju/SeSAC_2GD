export default function UseJSX() {
  /* 1. inline style 적용해보기
        - inline에 바로 속성 적용
        - object 선언 후 적용
     */
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gold",
  //     border: "1px solid #444",
  //     marginLeft: ".5rem",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: "fff", width: "100px", backgroundColor: "tomato" }}>
  //         first
  //       </div>
  //       <div style={divStyle}>second</div>
  //       <div>third</div>
  //     </div>
  //   );

  /* 2. JS 문법 써보기*/
  //   let isShow = false;
  //   let str;
  //   if (isShow === true) {
  //     str = "true입니다.";
  //   }
  //   return (
  //     <div>
  //       {/* true 일때 보이는 div */}
  //       <div>{isShow ? "true일 때 보임" : ""}</div>
  //       <div>{isShow && "true일 때 보임"}</div>
  //       {/* false 일때 보이는 div */}
  //       <div>{!isShow ? "false일 때 보임" : ""}</div>
  //       <div>{!isShow && "false일 때 보임"}</div>
  //       {/* if문과 for문은 jsx 문법 내에서 사용 금지 */}
  //       <div>{str}</div>
  //     </div>
  //   );

  /* 3. onClick 사용 */
  const myName = "진형";

  // 매개변수 없는 ver.
  function myFunc() {
    alert(`안녕, 내 이름은 ${myName}이야`);
  }

  // 매개변수 있는 ver.
  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      {/* 이 방법은 잘 사용하지 않음 */}
      <span onClick={myFunc}>h1</span>
      {/* 매개변수 필요한 경우 ()안에 함수가 들어가있는 형식! */}
      <span onClick={() => addNum(5, 8)}>8 더하기 5</span>
      <span onClick={() => myFunc()}>hi2</span>

      {/* 그냥 바로 func이 실행됨 */}
      {/* <span>{myFunc()}</span>
      <span>{myFunc}</span> */}
    </div>
  );
}
