import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const ref = useRef();

  const style = {
    textAlign: "center",
  };

  const number = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={style}>
      <h3>실습문제</h3>
      <h4>{number}</h4>
      <input type="number" ref={ref} />
      <button
        onClick={() => {
          dispatch({ type: "증가", number: ref.current.value });
          ref.current.value = "";
        }}
      >
        더하기
      </button>

      <button
        onClick={() => {
          dispatch({ type: "감소", number: ref.current.value });
          ref.current.value = "";
        }}
      >
        빼기
      </button>
    </div>
  );
}
