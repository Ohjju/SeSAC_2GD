//ES6방식 - ES6_import.js에서 호출
//실습4

//내가 한 방식
// export const name = ["철수", "영희"];
// export function showName() {
//   name.forEach((el) => console.log(el));
// }

// 리더님 방식
const human = ["철수", "영희"];
const showName = () => {
  human.forEach((el) => console.log(el));
};

export { human, showName };
