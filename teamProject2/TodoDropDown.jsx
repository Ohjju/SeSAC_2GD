import "../styles/todoDropdown.scss";
import TodoBox from "./TodoBox";
import { useState, useRef } from "react";

// 함수앞에 use 붙이고 upper형식으로 적어주기!!(오류)
export default function useTodoDropdown(props) {
  // const { title, date, content, statecolor, boxcolor } = props;
  const { boxcolor } = props;
  const [color, setcolor] = useState(boxcolor);

  const colors = [
    "--select-gray",
    " --select-pink",
    "--select-green",
    "--select-brown",
  ];
  // 랜덤 색 선택
  const randomValue = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div className="dropContainer shadow">
        <div>일정 삭제</div>
        <hr />
        <div>상태 변경</div>
        <div
          onClick={() => {
            // setcolor({ randomValue });
          }}
          style={{
            cursor: "pointer",
            width: "6rem",
            height: "2rem",
            fontSize: "1.3rem",
            backgroundColor: `var(${color})`,
          }}
        >
          색상 변경
        </div>
        <button
          style={{
            width: "6rem",
            height: "2rem",
            backgroundColor: "skyblue",
            fontSize: "1.3rem",
            cursor: "pointer",
          }}
          onClick={() => {}}
          // 변경하기 버튼 누르면 변경사항 반영되도록!
        >
          변경하기
        </button>
      </div>
    </>
  );
}
