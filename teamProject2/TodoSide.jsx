import "../styles/global.scss";
import "../styles/todoSide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronRight,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import MenuAddTodo from "./MenuAddTodo";
import MenuAddDoing from "./MenuAddDoing";
import MenuAddImportant from "./MenuAddImportant";
import "../styles/menuAddDoing.scss";

export default function TodoSide() {
  const [todoRotate, setTodoRotate] = (useState < boolean) | (null > false);
  const [doingRotate, setDoingRotate] = (useState < boolean) | (null > false);
  const [importRotate, setImportRotate] = (useState < boolean) | (null > false);

  // dropdown 보이게 하는 변수
  const [viewTodo, setViewTodo] = (useState < boolean) | (null > false);
  const [viewDoing, setViewDoing] = (useState < boolean) | (null > false);
  const [viewImportant, setViewImportant] =
    (useState < boolean) | (null > false);

  const [viewStar, setViewStar] = (useState < boolean) | (null > true);

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
          // 삼항연산자 이용해 class 추가
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
      {/* {viewDoing && <MenuAddDoing />} */}
      {viewDoing && (
        <div className="sideContainer">
          {/* 할일1 */}
          <div className="sideDoing">
            <div style={{ display: "flex" }}>
              <div className="doingCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="doingName">디자인 틀 잡기</div>
            </div>
            <div id="doingStar0">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewStar(!viewStar);
                  {
                    viewStar &&
                      document
                        .getElementById("doingStar0")
                        ?.classList.add("important");
                  }
                  {
                    !viewStar &&
                      document
                        .getElementById("doingStar0")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>

          {/* 할일 2 */}
          <div className="sideDoing">
            <div style={{ display: "flex" }}>
              <div className="doingCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="doingName">코드 작성하기</div>
            </div>
            <div id="doingStar1">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewStar(!viewStar);
                  {
                    viewStar &&
                      document
                        .getElementById("doingStar1")
                        ?.classList.add("important");
                    // const a = document.createElement();
                    // viewImportant && document.querySelector(".sideContainer")?.append("aa");
                  }
                  {
                    !viewStar &&
                      document
                        .getElementById("doingStar1")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

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
