import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddTodo.scss";
import { useState, useRef } from "react";

export default function MenuAddTodo() {
  const [viewTodo, setViewTodo] = (useState < boolean) | (null > true);
  return (
    <div className="sideContainer">
      <div className="sideTodo">
        <div style={{ display: "flex" }}>
          <div className="todoCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="todoName">디자인 틀 완성하기</div>
        </div>
        <div id="todoStar0">
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => {
              setViewTodo(!viewTodo);
              {
                viewTodo &&
                  document
                    .getElementById("todoStar0")
                    ?.classList.add("important");
              }
              {
                !viewTodo &&
                  document
                    .getElementById("todoStar0")
                    ?.classList.remove("important");
              }
            }}
          />
        </div>
      </div>

      <div className="sideTodo">
        <div style={{ display: "flex" }}>
          <div className="todoCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="todoName">ppt 만들기</div>
        </div>
        <div id="todoStar1">
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => {
              setViewTodo(!viewTodo);
              {
                viewTodo &&
                  document
                    .getElementById("todoStar1")
                    ?.classList.add("important");
              }
              {
                !viewTodo &&
                  document
                    .getElementById("todoStar1")
                    ?.classList.remove("important");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
