// 1. number type
let num: number = 1;
num = 2;

//2. string type
let str1: string = "hi";

console.log(str1, num);

//3. boolean, null, undefinded
let isTrue: boolean = true;
let empty: null = null;
let undef: undefined;

// 4. object
const obj1: object = {
  name: "allie",
};

// 5. array
let numArr: number[] = [1, 2, 3, 4, 5];
let stringArr: string[] = ["a", "b", "c"];
let arr: Array<String> = ["a", "b"];

let arr2: Array<String | number> = ["a", "b", 1, 2];
let arr3: (String | number)[] = ["a", "b", 1, 2];

// boolean or null or number array가 요소인 경우
let arr4: Array<boolean | null | number> = [true, null, 1, 2];
let arr5: (boolean | null | number[])[] = [true, null, [1, 2]];

arr5[1] = [5, 6, 7];
// arr4[2]="Str"; //선언할 때 부여한 type이 아니라면 오류

// Any 가급적 쓰지 않기
let arrAny: any[] = [1, 2, "apple", null, true];
