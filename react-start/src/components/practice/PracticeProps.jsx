import ListChild from "./ListChild";

function PracticeProps() {
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <ListChild todo="리액트 공부하기" todoText="state 사용법 익히기" />
      <ListChild todo="저녁먹기" todoText="스타필드 맛집 정복!!" />
    </div>
  );
}
export default PracticeProps;
