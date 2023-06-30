/*
변수
- var
    - 중복선언(재선언) 이 가능
    - 예기치 못한 값을 반환할 수 있음
- let
    - 중복선언 불가능
    - 재할당 가능
- const
    - 중복선언 불가능
    - 재할당 불가능
    - 선언과 동시에 초기화 작업해야함(값 할당)
 */

var name = "홍길동";
// var name = "나비";
console.log(name);

// let
let a;
console.log(a);
a = 10;
console.log(a);

//const
const b = 1;

let q = 10;
q -= 5;
console.log(q);

/*연산자
산술연산자: + - * /
대입연산자: =
비교연산자: == === != !== < > <= >=
논리연산자: || && !
*/

console.log(1 == 1);
console.log(1 === "1");

//크기 비교
// > < <= >=
console.log(1 < 2);

//산술연산
console.log(1 + 1);
console.log(5 % 3);

//논리연산
console.log(!true);
console.log(true || true);

//false
console.log("" == "0");
console.log(false == "hi");
//true
console.log(false == "0");
console.log(false == 0);
console.log("" == 0);
console.log(undefined == null);
//따라서 이런거 안 헷갈리려면 === 일치연산자 사용!
