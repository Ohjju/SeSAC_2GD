import { useEffect, useState, useRef } from "react";

//지금 import해준 거 다 경로설정 다시 해주기 -> practice파일을 밖으로 빼냄!!!
import ClassCom from "./components/ClassCom";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
// export default가 아니기 때문에 {}안에 감싸서 import 해주어야함
import ClassState from "./components/ClassState";
import FunctionProps from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import UseJSX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import PracticeProps from "./components/practice/PracticeProps";
import UseStatePractice from "./components/practice/UseStatePractice";
import Handler_ex from "./ex/Handler_ex";
import Color from "./ex/Color";
import Show from "./ex/Show";
import DOMComponent from "./ex/DOMComponent";
import Background from "./ex/Background";
import Number from "./ex/Number";
import RefVarState from "./ex/RefVarState";
import ConditionalOne from "./ex/ConditionalOne";
import ConditionalTwo from "./ex/ConditionalTwo";
import EffectComponent from "./ex/EffectComponent";
import TestUseEffect from "./ex/TestUseEffect";
import TimerComponent from "./ex/TimerComponent";
import PracticeTimerState from "./ex/PracticeTimerState";
import PracticeTimerVariable from "./ex/PracticeTimerVariable";
import PracticeTimerRef from "./ex/PracticeTimerRef";
import PropsMap from "./components/PropsMap";
import PracticeMap from "./components/practice/PracticeMap";
import ChangeObj from "./components/practice/ChangeObj";
import PororoObj from "./components/practice/PororoObj";
import BasicCss from "./components/BasicCss";
// import React, { useState } from "react";

function App() {
  // show true일때만 실행 -> TestuseEffect에서
  // const [show, setShow] = useState(true);
  // const buttonRef = useRef(null);
  // useEffect(() => {
  //   buttonRef.current?.focus();
  // });
  // const [state, setState] = useState(true);
  // const clickEvent = () => {
  //   setState((prev) => !prev);
  // };

  // const dataArr = [
  //   { name: "peach", krPrice: 10000, count: 5 },
  //   { name: "strawberry", krPrice: 14000, count: 1 },
  //   { name: "pear", krPrice: 5000, count: 6 },
  //   { name: "apple", krPrice: 10000, count: 10 },
  // ];

  return (
    <>
      {/* <PropsMap arr={dataArr} /> */}
      {/* <PracticeMap /> */}
      {/* <PororoObj /> */}
      {/* <BasicCss color={"blue"} /> */}

      {/* <DOMComponent />
      <DOMComponent />
      <DOMComponent />

      <Background></Background> */}
      {/* <Number></Number> */}
      {/* <RefVarState></RefVarState> */}

      {/* {state && <ConditionalOne text={"conditionalOne"} />}
      {!state && <ConditionalTwo text={"conditionalTwo"} />}
      <div>
        <button onClick={clickEvent}>변경!</button>
      </div> */}

      {/* <button>
        {show ? (
          <ConditionalOne text={"conditionOne"}></ConditionalOne>
        ) : (
          <ConditionalTwo text={"conditionTwo"}></ConditionalTwo>
        )}
      </button> */}

      {/* <EffectComponent></EffectComponent> */}
      {/* {show && <TestUseEffect></TestUseEffect>} */}
      {/* {show && <TimerComponent></TimerComponent>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        버튼
      </button> */}

      {/* {show && <PracticeTimerState></PracticeTimerState>} */}
      {/* {show && <PracticeTimerVariable></PracticeTimerVariable>} */}
      {/* {show && <PracticeTimerRef></PracticeTimerRef>}
      <button
        ref={buttonRef}
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show ? "보이기" : "숨기기"}
      </button> */}
    </>
  );

  // function test(text) {
  //   console.log(text);
  // }
  // const testExec = () => {
  //   test("안녕");
  // };
  // const handleClick = (e) => {
  //   console.log(e);
  //   e.preventDefault();
  // };
  // return (
  //   <>
  //
  //     {/* <a href="https://naver.com" onclick={handleClick}>
  //       a 태그입니다.
  //     </a>
  //     <button onClick={() => test("안녕")}>버튼</button>
  //     <button onClick={testExec}>버튼</button> */}
  //     {/* <Handler_ex></Handler_ex>
  //     <Color></Color>
  //     <Show></Show> */}
  //   </>
  // );
  // return (
  //   <div>
  //     <UseJSX></UseJSX>
  //     {/* 실습1 - firstpractice */}
  //     <FirstPractice></FirstPractice>
  //     <ClassCom />
  //     <FunctionState />
  //     {/* <ClassState /> */}
  //     <UseStatePractice />
  //     <FunctionProps name="사과" krPrice={5000} number={10} />
  //     <FunctionProps name="샤인머스켓" krPrice={35000} number={3} />
  //     <FunctionProps name="복숭아" />
  //     <FunctionProps>여기가 children입니다.</FunctionProps>
  //     <PracticeProps />
  //     <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cd" />
  //     <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
  //   </div>
  // );
  // const test1 = {
  //   a1: "1",
  // };
  // // 키와 값을 가지는 객체는 키로 값을 가져올 수 있음! ex) test1[a1]이런식
  // //이 때는 {} 중괄호 사용
  // const { a1, b1 } = test1;
  // const test2 = ["1", "2"];
  // // 배열을 가지고 있을 때 []사용
  // const [a2, b2] = test2;

  // //React.Fragment
  // //요소로 인식되지 않지만 자식 요소를 감싸줌(태그를 하나 줄일 수 있음)
  // return (
  //   <>
  //     <div>{name}</div>
  //     <a>dd</a>
  //   </>
  // );
}

export default App;
