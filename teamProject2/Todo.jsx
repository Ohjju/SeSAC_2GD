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
  // 초기값 0으로 넣어주었으므로 1부터 시작
  const TodoID = useRef < number > 0;
  const DoingID = useRef < number > 1;
  const DoneID = useRef < number > 1;

  const [inputTodo, setInputTodo] = useState < any > [];

  // doing 목록
  const [inputDoing, setInputDoing] =
    useState <
    any >
    [
      {
        id: 0,
        To: <></>,
      },
    ];

  // done 목록
  const [inputDone, setInputDone] =
    useState <
    any >
    [
      {
        id: 0,
        To: <></>,
      },
    ];

  // dropdown 관련변수
  const [view, setView] = useState < any > false;

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
  function useAddTodo() {
    const newTodo = {
      id: TodoID.current, // id 값은 변수로 넣어줌
      To: <TodoBox statecolor="--status-green" background="#ffffff" />,
    };
    setInputTodo([newTodo, ...inputTodo]); // 새로운 인풋객체 추가
    TodoID.current += 1; // id값은 1씩 늘려줌
  }

  useEffect(() => {
    console.log(inputTodo);
    // console.log(inputTest.current);
    // 여기 있으니까 잘 출력됨(순서 이대로)
    // const newTodo = {
    //   id: TodoID.current, // id 값은 변수로 넣어줌
    //   To: <TodoBox statecolor="--status-green" background="#ffffff" />,
    // };
    // inputTest.current = [newTodo, ...inputTest.current];
    // TodoID.current += 1;
  });

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

  // 드래그 이벤트 시작
  // const dragItem = useRef<any>(); // 드래그할 아이템의 인덱스
  // const dragOverItem = useRef<any>(); // 드랍할 위치의 아이템의 인덱스

  // 드래그 시작될 때 실행
  // const dragStart = (e: any, position: any) => {
  //   dragItem.current = position;
  // };
  // // 드래그중인 대상이 위로 포개졌을 때
  // const dragEnter = (e: any, position: any) => {
  //   dragOverItem.current = position;
  // };

  // // 드랍 (커서 땠을 때)
  // const drop = (e: any) => {
  //   const newList = [...inputTodo];
  //   const dragItemValue = newList[dragItem.current];
  //   newList.splice(dragItem.current, 1);
  //   // 인덱스 = dragItem.current인 지점에서 요소 하나 삭제
  //   newList.splice(dragOverItem.current, 0, dragItemValue);
  //   // 인덱스 = dragItem.current인 지점에서 기존 요소 유지한 채 dragItemValue 추가
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setInputTodo(newList);
  // };

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
                  <div className="count">{inputTodo.length}</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={useAddTodo}
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

                {inputTodo &&
                  inputTodo.map((item, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          draggable
                          onDragStart={(e) => dragStart(e, index)}
                          onDragEnter={(e) => dragEnter(e, index)}
                          onDragEnd={drop}
                          onDragOver={(e) => e.preventDefault()}
                          onClick={() => {
                            console.log(item);
                          }}
                        >
                          {item.To}
                          {/* 얘가 업데이트 안됨 - 처음 상태 유지 */}
                        </div>
                      </>
                    );
                  })}
              </div>

              <div className="doing">
                {view && <TodoDropdown />}
                {/* {inputDoing.map((e: any, index: any) => { */}
                {/* return <div key={index}>{e.To}</div>; */}
                {/* })} */}
              </div>

              <div className="done">
                {/* {view && <TodoDropdown />} */}
                {/* {inputDone.map((e: any, index: any) => { */}
                {/* return <div key={index}>{e.To}</div>; */}
                {/* })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
