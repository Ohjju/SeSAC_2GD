function printSome<T>(x: T): T {
  return x;
}

printSome<string>("a");
printSome<number>(3);
printSome<Boolean>(true);
// 배열 앞에 자료형 -> 요소들의 자료형 의미, 배열 뒤에 자료형 -> 배열의 자료형 의미
printSome<number[]>([1, 2, 3, 4, 5]);

function printSome2<T>(x: T, y: T): void {
  console.log(x);
  console.log(y);
}

printSome2<number>(1, 2);
printSome2<string>("안녕", "hello");

function printSome3<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}
printSome3<string, boolean>("안녕", false);

const arrLength = <T>(arr: T[]): number => {
  return arr.length;
};

const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = ["pineapple", "mange"];
const arr_3 = [[12, 13], [20, 21], [10]];

console.log(arrLength<number>(arr_1));
console.log(arrLength<string>(arr_2));
console.log(arrLength<number[]>(arr_3));

//실습
function arrElement<T>(arr: T[], x: number): T | boolean {
  if (arr.length - 1 <= x) {
    return false;
  } else {
    return arr[x];
  }
}
console.log("-----실습-----");
console.log(arrElement<string>(["a", "b", "c"], 1));
console.log(arrElement<string>(["a", "b", "c"], 5));
