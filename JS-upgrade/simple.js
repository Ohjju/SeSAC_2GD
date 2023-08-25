/*1. 전개 구문*/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

// 배열 합치기
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];


console.log(arr3);
console.log(arr4);

//1-2. 문자열에 접근해보기
const str = "alliehigh"; //['a','l','l', .....]
let strToArr = str.split("");
let strToArr2 = [...str];
//split "" 기본 상태일 때랑 같음 (띄어쓰기나 , 이런거로 구분은 X)
console.log(strToArr);
console.log(strToArr2);

/*
 split('') : string to arr
    (split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경)
 join() : arr to string
*/

console.log(str);
for (let el of str) {
  console.log(el); //문자열도 배열처럼 접근 가능
}

//1-3. 오브젝트
let me1 = {
  name: "allie",
  height: 163,
  married: false,
  friend: null,
};

let me2 = {
  name: "진형",
  like: ["sleeping", "놀기"],
  friend: {
    name: "지윤",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`
    );
  },
};

let me = {
  ...me1,
  ...me2,
  gender: "F",
};
//합칠때 같은 요소는 제일 밑에 있는 배열의 값으로 저장됨
console.log(me);
console.log(me.name);
me.greeting();

//실습1
const word1 = "abc";
const word2 = "xyz";
//방법1
let word1ToArr = [...word1];
let word2ToArr = [...word2];
const word = [...word1ToArr, ...word2ToArr];
console.log(word);
//방법2
const wordArr = [...word1, ...word2];
const wordArr2 = (word1 + word2).split("");
console.log(wordArr2);
//방법3
const wordArr3 = word1.split("").concat(word2.split(""));
console.log(wordArr3);

/*2. 구조 분해 할당*/
// 2-1. 배열의 구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [val1, val2, val3] = arr5;
console.log(val1); //tomato에 해당됨, arr5[0]과 같음

const arr6 = ["빨강", "주황", "노랑", "분홍"];
const [red, oragne, , pink] = arr6; //노랑은 안 넣고 싶으면 자리를 비워두면 됨!
console.log(pink); //분홍에 해당됨
const [v1, v2, v3, v4, v5] = arr6;
console.log(v5); //undefined 오류나지는 않음!
const [va, vb, vc, vd, ve = "green"] = arr6; //새로운 값을 설정할 수 있음
console.log(ve);

//변수 교환
let value1 = "second";
let value2 = "first";
let temp;
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1);
console.log(value2);

//구조 분해 할당을 이용해 변수 교환
value1 = "second";
value2 = "first";
[value1, value2] = [value2, value1];
console.log(value1, value2);

// 2-2. 객체(object)의 구조 분해 할당
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};
console.log(obj.title); //키 이름 적기
console.log(obj["title"]); //안에 키 이름을 문자열 처리해서 적기

const { num, content, title } = obj; //순서는 중요하지 않음, 키 이름이 중요함(이름 그대로 적어주어야 함!!)
console.log(num);
console.log(content);
console.log(title);

//혹시 키가 아니라 다른 이름을 사용하고 싶다면?
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2); //이제 t2, c2, n2를 입력하면 됨

//밑에처럼 변수에 따로 저장 안 하고 바로 선언할 수 있음
//obj2에는 key5,2를 제외한 나머지가 저장됨
const { key5, key2, ...obj2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};
console.log(key2, key5);
console.log(obj2);

// ...rest
function test(...val) {
  const [a, b, c, ...rest] = val;
  //val=[1,2,3,4,5]라면 a=1, b=2, c=3이고 rest에는 4,5 배열이 담김
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}
test(1, 2, 3, 4, 5);

//quiz1
//매개변수가 몇 개 들어오든 합해주는 함수 addNumber
function addNumber(...num) {
  let sum = 0;
  for (let el of num) {
    sum = sum + el;
  }
  // forEach 사용해도 됨
  //   num.forEach((el) => {
  //     sum = sum + el;
  //   });
  return sum;
}
console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function introduce(name, like = "빵", hate, gootAt) {
  console.log(`내 이름은 ${name}입니다.`);
  console.log(`좋아하는 것은 ${like}입니다.`);
  console.log(`싫어하는 것은 ${hate}입니다.`);
  console.log(`저는 ${gootAt}을 잘합니다.`);
}
introduce("a", "b", "c", "d");