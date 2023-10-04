import "../styles/todoBox.scss";
import "../styles/todoDropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import TodoDropdown from "./TodoDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoBox(props) {
  const { statecolor, background } = props;

  // dropdown 관련변수
  const [view, setView] = useState(false);

  // react에서 useref 사용
  const title = useRef < HTMLInputElement > null;

  // 랜덤 색 선택
  const colors = [
    "--select-green",
    " --select-pink",
    "--select-gray",
    "--select-brown",
  ];
  const randomValue = colors[Math.floor(Math.random() * colors.length)];

  // 날짜 선택
  const [startDate, setStartDate] = (useState < Date) | (null > new Date());
  const [endDate, setEndDate] = (useState < Date) | (null > new Date());

  return (
    <>
      <div
        className="todoBox shadow"
        style={{
          background: `linear-gradient(90deg, var(${randomValue}) 12px, ${background} 12px)`,
        }}
      >
        {/* dropdown 메뉴 */}
        {view && <TodoDropdown />}

        <div className="todoContent">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "1.6rem",
            }}
          >
            <div
              className="todoState"
              style={{ backgroundColor: `var(${statecolor})` }}
            ></div>
            <FontAwesomeIcon
              className="setTodo"
              icon={faEllipsisVertical}
              style={{ color: "d9d9d9", fontSize: "2.5rem" }}
              onClick={() => {
                setView(!view);
              }}
            />
          </div>
          <div className="todoInput">
            <FontAwesomeIcon icon={faFile} className="inputIcon" />
            <input
              className="todoTitle"
              placeholder="할일을 입력하세요"
              type="text"
              ref={title}
              spellCheck={false}
              onKeyDown={(e) => {
                // 테스크 블럭 추가
                if (e.key === "Enter") {
                  //입력받은 title => inputTitle
                  const inputTitle = title.current?.value;
                  document.querySelector(".inputIcon")?.remove();
                  // 엔터하면 input 포커스 해제
                  // (document.activeElement as HTMLElement).blur();
                }
              }}
            ></input>
          </div>

          <div className="todoDate">
            <DatePicker
              className="startDate"
              dateFormat="yy.MM.dd" // 날짜 형태
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
              maxDate={new Date("+365d")}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            ~
            <DatePicker
              className="endDate"
              dateFormat="yy.MM.dd"
              shouldCloseOnSelect
              minDate={new Date("2010-01-01")}
              maxDate={new Date("+365d")}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>

          <div className="todoMemo">
            <textarea
              className="todoMemo"
              placeholder="내용을 입력하세요"
              spellCheck={false}
              onKeyDown={(e) => {
                // 테스크 블럭 추가
                if (e.key === "Enter") {
                  // 엔터하면 input 포커스 해제
                  // (document.activeElement as HTMLElement).blur();
                  //입력받은 memo => inputMemo
                  // const inputMemo = (
                  // document.querySelector(".todoMemo") as HTMLInputElement
                  // ).value;
                  // console.log(inputMemo);
                }
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
