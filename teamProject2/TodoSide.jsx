import "../styles/global.scss";
import "../styles/todoSide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import MenuAddTodo from "./MenuAddTodo";
import MenuAddDoing from "./MenuAddDoing";
import MenuAddImportant from "./MenuAddImportant";

export default function TodoSide() {
  const [todoRotate, setTodoRotate] = (useState < boolean) | (null > false);
  const [doingRotate, setDoingRotate] = (useState < boolean) | (null > false);
  const [importRotate, setImportRotate] = (useState < boolean) | (null > false);

  // dropdown 보이게 하는 변수
  const [viewTodo, setViewTodo] = (useState < boolean) | (null > false);
  const [viewDoing, setViewDoing] = (useState < boolean) | (null > false);
  const [viewImportant, setViewImportant] =
    (useState < boolean) | (null > false);

  return (
    <>
      <div className="menu1">
        <div className="menuTodo">해야할 일</div>
        <FontAwesomeIcon
          className={`todoIcon ${todoRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{
            color: "var(--text-black-40)",
          }}
          onClick={() => {
            setTodoRotate(!todoRotate);
            setViewTodo(!viewTodo);
          }}
        />
      </div>
      {/* dropdown 메뉴*/}
      {viewTodo && <MenuAddTodo />}

      <hr
        style={{
          height: "0.1rem",
          backgroundColor: ` var(--text-black-20)`,
          border: "0",
          margin: "0",
        }}
      />
      <div className="menu2">
        <div className="menuDoing">진행 중</div>
        <FontAwesomeIcon
          className={`doingIcon ${doingRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{ color: "var(--text-black-40)" }}
          onClick={() => {
            setDoingRotate(!doingRotate);
            setViewDoing(!viewDoing);
          }}
        />
      </div>
      {/* dropdown 메뉴*/}
      {viewDoing && <MenuAddDoing />}

      <hr
        style={{
          height: "0.1rem",
          backgroundColor: ` var(--text-black-20)`,
          border: "0",
          margin: "0",
        }}
      />
      <div className="menu3">
        <div className="menuImportant">중요</div>
        <FontAwesomeIcon
          className={`importIcon ${importRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{ color: "var(--text-black-40)" }}
          onClick={() => {
            setImportRotate(!importRotate);
            setViewImportant(!viewImportant);
          }}
        />
      </div>
      {/* dropdown 메뉴*/}
      {viewImportant && <MenuAddImportant />}
    </>
  );
}
