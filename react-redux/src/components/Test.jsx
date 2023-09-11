import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  // useSelector로 store의 state를 가져옴!
  // 지금 number에 1이 담겨있음! state default 값을 1로 index.js에서 설정했으므로
  const number = useSelector((state) => state);
  //   const number = useSelector((state) => {
  //     return state;
  //   });

  const dispatch = useDispatch();

  return (
    <>
      <h2>store의 state 가져오기 (useSelector 사용)</h2>
      <p>store에 저장되어 있는 number는 {number}</p>
      <h2>store의 state 변경 (useDispatch 이용)</h2>
      <button onClick={() => dispatch({ type: "증가" })}>+</button>
      <button onClick={() => dispatch({ type: "감소" })}>-</button>
    </>
  );
}
