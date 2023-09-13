import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((el) => el.done === false);

  const input = useRef();
  const dispatch = useDispatch();
  const nextId = useSelector((state) => state.todo.nextID);

  const addTodo = () => {
    dispatch(create({ id: nextId, text: input.current.value }));
    input.current.value = "";
  };

  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input
          type="text"
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        {/* dispatch({type:"todo/CREATE"})처럼 일일이 지정하는게 아닌 함수를 import해서 사용함*/}
        <button
          onClick={() => {
            // create(payload) -> input에서 받은 값을 payload로 추가
            addTodo();
          }}
        >
          추가
        </button>
      </div>
      {todoList.length === 0 && "할 일 목록이 비어있습니다."}

      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
