//방법1 : export default 키워드를 앞에 붙임
// export default function sayHi() {
//   console.log("export default 사용");
// }

// 방법2 : 클래스 선언이 모두 끝난 후에 따로 보내기
function sayHi() {
  console.log("export default 사용");
}
export default sayHi;

// (주의!) export default 키워드로 함수 표현식은 내보낼 수 없습니다.
// export default sayHi2 = () => {
//   console.log("함수 표현식은 안돼요");
// };
