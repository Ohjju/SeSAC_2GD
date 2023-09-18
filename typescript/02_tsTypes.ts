//Tuple
/*
    tuple = 배열
    - 길이와 타입이 지정되어 있는 배열
*/
let drink: [string, string];
drink = ["cola", "cider"];

drink.push("str"); //str이라는 문자열 추가
console.log(drink);

let drink2: readonly [string, number] = ["cola", 2500];
// drink2.push("사이다") //변경안됨!!

// enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
console.log(Auth.admin);

//실습1
let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// olimpic_newgame[1] = false; //안됨
console.log(olimpic_newgame);

// interface & type
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "jh",
  isPassed: false,
};

type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; //?쓰면 써도 되고 안써도 됨
  [grade: number]: Score; //한 타입인데 여러개 선언시 []로 묶어주기
  //grade는 의미론적인 거고 그 자리에 number형이 온다!
  // 1(grade) : 'A' (Score)
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: "A",
  2: "A+",
  3: "F",
};

otani.position = "투수"; //pitcher에서 투수로 바꾸기
console.log(otani);
// otani.backNumber = 20; //안됨
otani["1"] = "B"; //.이 아니라 []로 접근 -> [grader:number]로 정의했으므로

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: String;
  price: number;
}

// toy랑 car 둘다 가져오므로 요소들 전부 적어주어야 함
const toyCar: Toy & Car = {
  name: "타요",
  start() {
    console.log("이름은 " + this.name + "입니다.");
  },
  color: "blue",
  price: 50000,
};

toyCar.start();

type Person = {
  name: String;
  age?: number;
  like?: string[];
  gender: String;
};

let daniel: Person = {
  name: "Daniel",
  gender: "Female",
  age: 20,
};

type Gender = "Male" | "Female";

type Person2 = {
  name: String;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "알버트 덤블도어",
  gender: "Male", //토씨하나라도 틀리면 안됨!
};
console.log(albert);

//실습2
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

console.log(heroGame_A);
console.log(heroGame_B);
