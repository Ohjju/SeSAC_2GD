/*if문 */
// if(조건식){조건식이 참일 때 실행할 문장;}
if (5 > 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해주세요"));

//if~else...
/*if (조건){
    //조건이 참일때 실행할 문장
}
else{
    //조건이 거짓일 때 실행할 문장
}
*/

// if (number > 10) {
//   console.log("10보다 큽니다");
// } else if (number === 10) {
//   console.log("10이네요!");
// }

//성적 산출 프로그램
//91-100은 A
//81-90 B
//71-80 C
//61-70 D
//나머지 F
// let score = Number(prompt("숫자를 입력해주세요"));
// if (score >= 91 && score <= 100) {
//   console.log("A");
// } else if (score >= 81) {
//   console.log("B");
// } else if (score >= 71) {
//   console.log("C");
// } else if (score >= 61) {
//   console.log("D");
// } else {
//   console.log("F");
// }

//실습
// let age = Number(prompt("나이를 입력해주세요"));
// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else if (age >= 0) {
//   console.log("유아");user
// }

// let userId = "user";
// let userPw = "1234!";

// function login() {
//   let inputId = prompt("아이디를 입력해주세요");
//   let inputPw = prompt("패스워드를 입력해주세요");

//   if (inputId === userId) {
//     if (inputPw === userPw) {
//       alert("로그인 성공");
//     }
//   } else {
//     alert("아이디가 틀림");
//   }
// }
// login();

//switch ~ case

// switch (값) {
//   case 1:
//     //값이 1이라면 실행

//     break;
//   case "abcd":
//     break;
//   default:
// }

// let a = 4;
// switch (a) {5
//   case 3:
//     console.log("3입니다.");
//     break;
//   case 4:
//     console.log("4입니다.");
//     break;
//   case 5:
//     console.log("5입니다.");
//     break;
//   default:
//     console.log("3,4,5가 아니다");
//     break;
// }

//실습2
// let num = Number(prompt("숫자를 적으세요"));
// if (num % 2 == 0) {
//   console.log("짝수입니다.");
// } else {
//   console.log("홀수입니다.");
// }

// num % 2 == 0 ? console.log("짝수입니다.") : console.log("홀수입니다.");

//실습3
// let now = new Date().getHours();
// now >= 12 ? console.log("오후") : console.log("오전");
