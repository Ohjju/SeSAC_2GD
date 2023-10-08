import "../styles/menuAddDoing.scss";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import MenuAddImportant from "./MenuAddImportant";

export default function MenuAddDoing() {
  const [viewDoing, setViewDoing] = (useState < boolean) | (null > true);

  return (
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
              setViewDoing(!viewDoing);
              {
                viewDoing &&
                  document
                    .getElementById("doingStar0")
                    ?.classList.add("important");
              }
              {
                !viewDoing &&
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
              setViewDoing(!viewDoing);
              {
                viewDoing &&
                  document
                    .getElementById("doingStar1")
                    ?.classList.add("important");
              }
              {
                !viewDoing &&
                  document
                    .getElementById("doingStar1")
                    ?.classList.remove("important");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
