import { useReducer, useState } from "react";

export default function UseReducer() {
  const [number, setNumber] = useState(0);

  //const [state, dispatch] = useReducer(reducer, state초기값)
  const reducer = (state, action) => {
    // action ={type:"~", payload:"~"}
    // type과 payload는 action에서 받아오므로 action.~으로 작성
    switch (action.type) {
      case "deposit": //예금: 기존 state에서 number를 더함
        return state + action.payload;
      case "withdraw": //출금: 기존 state에서 number를 뺌
        return state - action.payload;
      default:
        return state;
    }
  };

  //state값
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h4>useReducer</h4>
      <p>잔고 {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          // value는 문자열이므로 nubmer형태로 바꿔주어야 함
          setNumber(Number(e.target.value));
        }}
        step="1000"
        // 단위가 1000으로 됨
      />

      {/* dispatch에 작성한 action이 reducer의 action으로 들어감 */}
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
          //dispatch("fffff") 그냥 이런식으로 type만 전달해도 ok
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
