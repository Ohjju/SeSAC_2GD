console.log("안녕하세요");
//alert("안녕하세요");
//confirm("js 재밌지 않나요?");
//prompt("당신의 이름은?");

/* 1. 문자열, string */
let myName = "주현";
let mycity = "서울";
console.log(mycity);
// 내 이름은 주현이고요, 사는 곳은 서울이에요.

console.log("내 이름은", myName, "이고요, 사는 곳은", mycity, "이에요.");
console.log("내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이에요.");
console.log(`내 이름은 ${myName} 이고요, 사는 곳은 ${mycity}이에요.`);
// 따옴표가 아니라 기울어진 따옴표 같은거로 입력해야함!!! 주의

let myinfo = "내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이에요.";
let myinfo2 = "내 이름은 ${myName} 이고요, 사는 곳은 ${mycity}이에요.";
// 쉼표를 이용해서 문자열을 연결하는 것은 안된다!
console.log(myinfo);
console.log(myinfo2);

/* 2. Number*/
let num1 = 100;
let num2 = 3.14;
console.log(num1 + num2);
console.log(myName + num1); // 숫자가 문자로 바뀌어서 문자끼리의 연결로 바꿈!
console.log(myName - num1); //숫자와 문자열 뺄셈 = NaN(Not a Number)

/* 3. boolean */
let checked = true;
let isShow = false;

console.log(checked);
console.log(false);

/* undefined */
let undef;
console.log(undef);

let empty = null;
console.log(empty);

/* 5. array */
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];
console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);
//아이스크림

/* 6. object */
// 배열은 순서가 있지만 오브젝트는 키-값 형태로 저장하고 키 이름으로 접근한다.
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

console.log(cat);
//점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

//대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);
cat["gender"] = "F";
cat["parents"] = ["mom", "dad"];
console.log(cat.parents[0]);

console.log("-----typeof------");
console.log(typeof "문자");
console.log(typeof 245);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});

//형변환
// 1. >> 몬자
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(typeof String(str1));

console.log(typeof str1.toString());

//2. 숫자
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = "3.14";
console.log(Number(n1)); //1
console.log(Number(n2)); //0

let likeNum = prompt("가장 좋아하는 숫자는?");
likeNum = Number(likeNum);
console.log(likeNum + 10);

console.log(parseInt(n4));

//실습1
console.log(typeof 123 + " isn't " + typeof "abc" + " data type");
console.log(
  "typeof를 boolean이나 null에 사용하면 " +
    typeof null +
    " 결과를 얻을 수 있습니다."
);

//실습2
let mathScore = prompt("math score: ");
let engScore = prompt("eng score: ");

mathScore = Number(mathScore);
engScore = Number(engScore);
avgScore = (mathScore + engScore) / 2;
console.log("평균점수: " + avgScore);
