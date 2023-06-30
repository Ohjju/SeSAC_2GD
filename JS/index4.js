/*함수 선언문
function 함수이름(매개변수){
    함수내용
}

함수 이름은 camelCase 이용!
*/
helloWorld1();
function helloWorld1() {
  console.log("helloWorld1");
}
helloWorld1();

function helloWorld2() {
  return "hello world2";
}
/* return
- 함수의 반환값, 함수 내부 코드의 '최종값
*/

helloWorld2();

function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1, num2) {
  console.log("이 부분은 실행됨");
  return num1 + num2;
  console.log("이 부분은 실행 안됨");
}
add2(3, 4);

//함수 표현식
const helloWorld3 = function () {
  console.log("hello world3");
};

helloWorld3();

//화살표 함수
const helloWorld4 = () => {
  return "hello World4";
};

//매개변수가 있는 함수
function sayHello(name) {
  return "안녕하세요 " + name + "님";
}
console.log(sayHello("주현"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}

sayHello2("안녕하세요", "주현");

//실습
function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 7));

//실습2
function square(num) {
  console.log(num ** 2);
}
square(11);
