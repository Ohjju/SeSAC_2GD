import "../styles/todoBox.scss";
import "../styles/todoDropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import TodoDropdown from "./TodoDropdown";

export default function TodoBox(props) {
  const { title, date, content, statecolor, boxcolor } = props;

  // dropdown 관련변수
  const [view, setView] = useState(false);

  return (
    <>
      <div
        className="todoBox shadow "
        style={{
          background: `linear-gradient(90deg, var(${boxcolor}) 12px, #ffffff 12px)`,
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

          <div className="todoTitle">{title}</div>
          <div className="todoDate">{date}</div>
          <div className="todoMemo">{content}</div>
        </div>
      </div>
    </>
  );
}
