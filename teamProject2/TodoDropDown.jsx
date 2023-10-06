import "../styles/todoDropdown.scss";
import { useState, useRef } from "react";
// chageColor = 입력받은 color로 현재 boxColor를 바꿔주는 함수
import { ChangeColor } from "./ChangeColor";

// 함수앞에 use 붙이고 upper형식으로 적어주기!!(오류)
export default function useTodoDropdown(props) {
  // const { title, date, content, statecolor, boxcolor } = props;
  const { boxcolor } = props;
  const [pinkColor, setPinkColor] = useState(boxcolor);
  const [greenColor, setGreenColor] = useState(boxcolor);
  const [grayColor, setGrayColor] = useState(boxcolor);
  const [brownColor, setBrownColor] = useState(boxcolor);

  const colors = [
    " --select-pink",
    "--select-green",
    "--select-gray",
    "--select-brown",
  ];

  return (
    <>
      <div className="dropContainer shadow">
        <div className="changeState">상태 변경</div>

        <div className="selectState">
          <div className="selectTodo">
            <div className="stateTodo">예정</div>
          </div>
          <div className="selectDoing">
            <div className="stateDoing">진행 중</div>
          </div>
          <div className="selectDone">
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
            }}
          >
            <div className="green"></div>
          </div>
          <div
            className="selectGray"
            onClick={() => {
              setGrayColor(colors[2]);
              ChangeColor(grayColor);
            }}
          >
            <div className="gray"></div>
          </div>
          <div
            className="selectBrown"
            onClick={() => {
              setBrownColor(colors[3]);
              ChangeColor(brownColor);
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
