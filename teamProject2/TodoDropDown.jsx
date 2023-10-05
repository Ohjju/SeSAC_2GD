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

  // const div = document.getElementById("my_div") as HTMLElement;
  // const result = document.getElementById("result") as HTMLElement;
  // div.(addEventListener as HTMLElement)("click", (event) => {
  //   result.innerHTML += "<div>click</div>";
  // });

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
          <div className="selectPink">
            <div className="pink"></div>
          </div>
          <div className="selectGreen">
            <div className="green"></div>
          </div>
          <div className="selectGray">
            <div className="gray"></div>
          </div>
          <div className="selectBrown">
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
