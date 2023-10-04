import "../styles/todoDropdown.scss";
import { useState, useRef } from "react";

// 함수앞에 use 붙이고 upper형식으로 적어주기!!(오류)
export default function useTodoDropdown(props) {
  // const { title, date, content, statecolor, boxcolor } = props;
  const { boxcolor } = props;
  const [color, setcolor] = useState(boxcolor);

  const colors = [
    " --select-pink",
    "--select-green",
    "--select-gray",
    "--select-brown",
  ];

  return (
    <>
      <div className="dropContainer shadow">
        <div className="delete">일정 삭제</div>
        <hr
          style={{
            height: "0.15rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div className="changeState">상태 변경</div>

        <div className="selectState">
          <div className="stateTodo">예정</div>
          <div className="stateDoing">진행 중</div>
          <div className="stateDone">완료</div>
        </div>
        <hr
          style={{
            height: "0.15rem",
            backgroundColor: `var(--main-color-20)`,
            border: "0",
          }}
        />
        <div className="changeColor" onClick={() => {}}>
          색상 변경
        </div>
        <div className="selectColor">
          <div className="pink"></div>
          <div className="green"></div>
          <div className="gray"></div>
          <div className="brown"></div>
        </div>
      </div>
    </>
  );
}
