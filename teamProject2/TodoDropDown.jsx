import "../styles/todoDropdown.scss";
import { useState, useRef } from "react";
// chageColor = 입력받은 color로 현재 boxColor를 바꿔주는 함수
import { ChangeColor } from "./ChangeColor";
import { ChangeState } from "./ChangeState";

// 함수앞에 use 붙이고 upper형식으로 적어주기!!(오류)
export default function useTodoDropdown(props) {
  const { boxColor, stateColor } = props;

  // 색깔별로 다르게 변수 설정해주어야 현재 색상이 반영됨
  // 하나의 변수로 설정하면 이전 색상이 반영됨
  const [todoStateColor, setTodoStateColor] = useState(stateColor[0]);
  const [doingStateColor, setDoingStateColor] = useState(stateColor[1]);
  const [doneStateColor, setDoneStateColor] = useState(stateColor[2]);

  const [pinkColor, setPinkColor] = useState(boxColor[0]);
  const [greenColor, setGreenColor] = useState(boxColor[1]);
  const [grayColor, setGrayColor] = useState(boxColor[2]);
  const [brownColor, setBrownColor] = useState(boxColor[3]);

  const states = ["--status-green", "--status-yellow", "--status-gray"];
  const colors = [
    "--select-pink",
    "--select-green",
    "--select-gray",
    "--select-brown",
  ];

  return (
    <>
      <div className="dropContainer shadow">
        <div className="changeState">상태 변경</div>

        <div className="selectState">
          <div
            className="selectTodo"
            onClick={() => {
              setTodoStateColor(states[0]);
              ChangeState(todoStateColor);
              console.log(todoStateColor);
            }}
          >
            <div className="stateTodo">예정</div>
          </div>
          <div
            className="selectDoing"
            onClick={() => {
              setDoingStateColor(states[1]);
              ChangeState(doingStateColor);
              console.log(doingStateColor);
            }}
          >
            <div className="stateDoing">진행 중</div>
          </div>
          <div
            className="selectDone"
            onClick={() => {
              setDoneStateColor(states[2]);
              ChangeState(doneStateColor);
              console.log(doneStateColor);
            }}
          >
            <div className="stateDone">완료</div>
          </div>
        </div>
        <hr
          style={{
            height: "0.1rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div className="changeColor">색상 변경</div>
        <div className="selectColor">
          <div
            className="selectPink"
            onClick={() => {
              setPinkColor(colors[0]);
              ChangeColor(pinkColor);
              console.log(pinkColor);
            }}
          >
            <div className="pink"></div>
          </div>
          <div
            className="selectGreen"
            onClick={() => {
              setGreenColor(colors[1]);
              // 전에 누른 색상 + 지금 색상 (2번 눌러야 함)
              ChangeColor(greenColor);
              console.log(greenColor);
            }}
          >
            <div className="green"></div>
          </div>
          <div
            className="selectGray"
            onClick={() => {
              setGrayColor(colors[2]);
              ChangeColor(grayColor);
              console.log(grayColor);
            }}
          >
            <div className="gray"></div>
          </div>
          <div
            className="selectBrown"
            onClick={() => {
              setBrownColor(colors[3]);
              ChangeColor(brownColor);
              console.log(brownColor);
            }}
          >
            <div className="brown"></div>
          </div>
        </div>
        <hr
          style={{
            height: "0.1rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div className="delete">일정 삭제</div>
      </div>
    </>
  );
}
