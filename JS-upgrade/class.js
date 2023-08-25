/* 3. 클래스 */
// 오브젝트를 생성
/*
 속성
    만들어진 연도 year
    집의 이름 name
    창문의 갯수 window
 함수
    만들어진 연도를 콘솔창에 출력하는 "건물의 나이"{
    창문의 갯수를 콘솔창에 출력하는 함수
*/

class House {
  //constructor에 속성이 들어감
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    // 여기의 name을 들어오는 name의 값으로 바꿔줌
    this.window = window;
  }

  getAge() {
    console.log(`${this.name}은 건축한 지 ${2023 - this.year}년 지났습니다.`);
  }

  // getWindow() {
  //   console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  // }

  getWindow() {
    console.log(
      `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 만들었습니다.`
    );
  }
  //overriding
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();

const house2 = new House(2022, "자이", 10);
console.log(house2);
house2.getAge();
house2.getWindow();

console.log("-----상속-----");

/*
 추가할 속성
    층수 floor
    창문 제조없체 windowMaker
 
 추가할 함수
    aptInfo() 아파트 정보를 나타내는 메소드
*/

class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    // 상속받은거는 this 말고 super로 상속받았다고 나타냄
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}. 총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }
}

const apt1 = new Apartment(2020, "raemain", 6, 19, "KCC");
console.log(apt1);
apt1.getAge();
apt1.getWindow();
console.log(apt1.getAptInfo());

//실습2 : Shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
let recl = new Shape(3, 4);
console.log(recl.getArea());

//실습3 클래스 상속
// 1. 직사각형
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    //어떤 속성을 추가할게 아니면 constructor 굳이 쓸 필요 없음!
  }
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
const rectangle2 = new Rectangle(6, 8);
console.log(rectangle2.getArea());
console.log(rectangle2.getDiagonal());

//2. 삼각형
class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height * 0.5;
  }
}
const triangle2 = new Triangle(4, 6);
console.log(triangle2.getArea());

//3. 원
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  //overriding
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
const circle2 = new Circle(5, 6, 3);
console.log(circle2.getArea());
