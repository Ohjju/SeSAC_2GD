const colors = ["red", "pink", "orange"];

const sayHi = function () {
  console.log("hi");
};

function sayName(name) {
  console.log(`my name is ` + name);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

const p1 = new Person("amy", 20);
console.log(p1.getBornYear());

//한번에 exports 시키기!!(내보내기)
// 위에 함수 선언 모두 한후에 제일 밑에서 한번에 exports
module.exports = {
  colors,
  sayName,
  Person,
};
