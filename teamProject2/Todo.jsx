import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import TodoDropdown from "../components/TodoDropdown";
import TodoSide from "../components/TodoSide";
// chageColor = 입력받은 color로 현재 boxColor를 바꿔주는 함수
import { ChangeColor } from "../components/ChangeColor";

// todo 목록
export default function Todo() {
  const TodoID = useRef < number > 1;
  const DoingID = useRef < number > 1;
  const DoneID = useRef < number > 1;

  // todo 목록 => inputTodo
  const [inputTodo, setInputTodo] = useState([
    {
      id: 0,
      To: <></>,
      // 나중에 고치기(불필요한 태그 생성됨)
    },
  ]);

  // doing 목록
  const [inputDoing, setInputDoing] = useState([
    {
      id: 0,
      To: <></>,
    },
  ]);

  // done 목록
  const [inputDone, setInputDone] = useState([
    {
      id: 0,
      To: <></>,
    },
  ]);

  // dropdown 관련변수
  const [view, setView] = useState(false);

  // const randomValue = colors[Math.floor(Math.random() * colors.length)];
  // 위처럼 작성하면 색이 자꾸 바뀜 -> 한번 결정된 색은 새로고침 안되도록 수정!
  // 랜덤 색 선택
  const colors = [
    "--select-green",
    " --select-pink",
    "--select-gray",
    "--select-brown",
  ];

  // useEffect((): any => {
  //   const randomValue = colors[Math.floor(Math.random() * colors.length)];
  //   // const randomColor = document.querySelector(".todoBox") as HTMLInputElement;
  //   // randomColor.style.background = `linear-gradient(90deg, var(${randomValue}) 12px, #ffffff 12px)`;
  // }, []);

  // todo 추가
  function addTodo() {
    const newTodo = {
      id: TodoID.current, // id 값은 변수로 넣어줌
      To: <TodoBox statecolor="--status-green" background="#ffffff" />,
    };
    setInputTodo([newTodo, ...inputTodo]); // 새로운 인풋객체 추가
    TodoID.current += 1; // id값은 1씩 늘려줌
  }

  // doing 추가
  function addDoing() {
    const newDoing = {
      id: DoingID.current,
      To: <TodoBox statecolor="--status-yellow" background="#ffffff" />,
    };
    setInputDoing([newDoing, ...inputDoing]);
    DoingID.current += 1;
  }

  // Done 추가
  function addDone() {
    const newDone = {
      id: DoneID.current,
      To: <TodoBox statecolor="--status-gray" background="#f5f5f5" />,
    };
    setInputDone([newDone, ...inputDone]);
    DoneID.current += 1;
  }

  return (
    <>
      <header className="header">
        <FontAwesomeIcon className="hamburger" icon={faBars} />
        <div className="logo"></div>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>
      <div className="todoContainer">
        <div className="left">
          <div className="miniCalendar shadow"></div>
          <div className="whiteBox shadow">
            <TodoSide />
          </div>
        </div>
        <div className="right">
          <div className="todoGroup">
            <div className="todoGroupingBox">
              <div className="todo shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">해야할 일</div>
                  {/* 할일 개수 */}
                  <div className="count">{inputTodo.length - 1}</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={() => {
                    addTodo();
                  }}
                />
              </div>

              <div className="doing shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">진행 중</div>
                  <div className="count">{inputDoing.length - 1}</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={addDoing}
                />
              </div>
              <div className="done shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">완료</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={addDone}
                />
              </div>
            </div>
            <div className="todoGroupBox">
              <div className="todo">
                {view && <TodoDropdown />}
                {inputTodo.map((e, index) => {
                  return <div key={index}>{e.To}</div>;
                })}
              </div>

              <div className="doing">
                {view && <TodoDropdown />}
                {inputDoing.map((e, index) => {
                  return <div key={index}>{e.To}</div>;
                })}
              </div>

              <div className="done">
                {view && <TodoDropdown />}
                {inputDone.map((e, index) => {
                  return <div key={index}>{e.To}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
