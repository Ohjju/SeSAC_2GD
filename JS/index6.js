/*
for문
for(변수 초기화; 조건식; 증감)

index++; i=i+1; i+1;
*/

// for (let i = 0; i < 0; i = i + 1) {
//   console.log("안녕하세요");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ["사과", "망고", "수박", "바나나"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let numArr = [100, 200, 99, 58, 77, 23];
// let numSum = 0;
// for (let i = 0; i < numArr.length; i++) {
//   numSum += numArr[i];
// }
// console.log(numSum);

//실습
for (let i = 0; i <= 10000; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}
