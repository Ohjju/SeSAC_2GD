import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import TodoDropdown from "../components/TodoDropdown";
import TodoSide from "../components/TodoSide";

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

  // react에서 useref 사용
  // const input = useRef<HTMLInputElement>(null);

  // dropdown 관련변수
  const [view, setView] = useState(false);

  // todo 추가
  function addTodo() {
    // const { title, date, content, boxcolor } = props;
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

  // todoBox 색
  const colors = [
    "--select-gray",
    " --select-pink",
    "--select-green",
    "--select-brown",
  ];

  return (
    <>
      <header className="header"></header>
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
                  onClick={addTodo}
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
