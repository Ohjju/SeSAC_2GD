import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddImportant.scss";
import { useState, useRef, useEffect } from "react";

export default function MenuAddImportant(props) {
  const { name, state } = props;
  const [important, setImportant] = useState < any > [];
  const ImportID = useRef < number > 0;

  // useEffect(() => {
  //   const newImportant = {
  //     id: ImportID.current, // id 값은 변수로 넣어줌
  //     To: <div>hello</div>,
  //   };
  //   setImportant([newImportant, ...important]); // 새로운 인풋객체 추가
  //   ImportID.current += 1; // id값은 1씩 늘려줌
  // }, []);

  return (
    <div className="sideContainer">
      {/* {important &&
        important.map((item: any, index: any) => {
          return (
            <>
              <div
                key={index}
                onClick={() => {
                  console.log(item);
                }}
              >
                {item.To}
              </div>
            </>
          );
        })} */}
      <div className="sideImportant">
        <div style={{ display: "flex" }}>
          <div
            className="importantCheckbox"
            style={{ color: `var(--status-green)` }}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="importantName">디자인 틀 잡기</div>
        </div>
      </div>

      <div className="sideImportant">
        <div style={{ display: "flex" }}>
          <div
            className="importantCheckbox"
            style={{ color: `var(--status-yellow)` }}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="importantName">코드 완성하기</div>
        </div>
      </div>
    </div>
  );
}
