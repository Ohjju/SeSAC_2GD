import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );

  return (
    <>
      <h1>DoneList</h1>
      {list.length === 0 && "완료 목록이 비어있습니다."}
      <ul>
        {/* map은 js문법이므로 중괄호 해줌 */}
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </>
  );
}
