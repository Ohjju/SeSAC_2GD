let section3 = document.querySelector(".section3");
let a3_0 = document.querySelector(".article3-0");
let a3_1 = document.querySelector(".article3-1");
let a3_2 = document.querySelector(".article3-2");
let a3_3 = document.querySelector(".article3-3");
let a3_4 = document.querySelector(".article3-4");
let a3_5 = document.querySelector(".article3-5");
const a = [a3_0, a3_1, a3_2, a3_3, a3_4, a3_5];

let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");
let temp3 = document.querySelector(".temp3");

// section3 스크롤하면 글씨 나타나는 애니메이션
let margin = 730;
let saTriggerHeight = 0;
const saFunc = function () {
  for (let index = 0; index < 6; index++) {
    if (!a[index].classList.contains("show")) {
      saTriggerHeight = a[index].getBoundingClientRect().top + margin;

      if (window.innerHeight > saTriggerHeight) {
        a[index].classList.add("show");
      }
    }
  }
};

window.addEventListener("scroll", saFunc);

// 스크롤 할 때마다 함수가 실행됨 (여러번 반복됨)

// let observer1 = new IntersectionObserver((e) => {
//   e.forEach((a) => {
//     // 관찰 대상이 뷰포트에 들어온 경우
//     if (a.intersectionRatio > 0) {
//       // 클래스에 show 추가
//       a.target.classList.add("show");
//     }
//     // 관찰 대상이 뷰포트 밖으로 나가는 경우
//     else {
//       // 클래스에서 show 제거
//       a.target.classList.remove("show");
//     }
//   });
// });

// const boxElemList = document.querySelectorAll(".sa");
// boxElemList.forEach((a) => observer1.observe(a));

// section7 스크롤시 box 올라오는 애니메이션
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let b1_margin = 250;
let b1_height = 0;
const Func1 = function () {
  b1_height = box1.getBoundingClientRect().top + b1_margin;
  if (window.innerHeight > b1_height) {
    box1.style.opacity = "1";
    box1.style.transition = "1.2s";
    box1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func1);

let b2_margin = 400;
let b2_height = 0;
const Func2 = function () {
  b2_height = box2.getBoundingClientRect().top + b2_margin;
  if (window.innerHeight > b2_height) {
    box2.style.opacity = "1";
    box2.style.transition = "1.2s";
    box2.style.margin = "0";
  }
};

window.addEventListener("scroll", Func2);
let b3_margin = 180;
let b3_height = 0;
const Func3 = function () {
  b3_height = box3.getBoundingClientRect().top + b3_margin;
  if (window.innerHeight > b3_height) {
    box3.style.opacity = "1";
    box3.style.transition = "1.2s";
    box3.style.margin = "0";
  }
};
window.addEventListener("scroll", Func3);

// section4 스크롤시 애니메이션
let section4 = document.querySelector(".section4");
let a4_1 = document.querySelector(".article4-1");
let a4_2 = document.querySelector(".article4-2");
let a4_3 = document.querySelector(".article4-3");
let a4_4 = document.querySelector(".article4-4");

let a4_1margin = 150;
let a4_2margin = 100;
let a4_3margin = 200;
let a4_4margin = 300;
let a4_1height = 0;
let a4_2height = 0;
let a4_3height = 0;
let a4_4height = 0;

const Func4_1 = function () {
  a4_1height = a4_1.getBoundingClientRect().top + a4_1margin;
  if (window.innerHeight > a4_1height) {
    a4_1.style.opacity = "1";
    a4_1.style.transition = "1s";
    a4_1.style.marginTop = "40px";
  }
};
window.addEventListener("scroll", Func4_1);

const Func4_2 = function () {
  a4_2height = a4_2.getBoundingClientRect().top + a4_2margin;
  if (window.innerHeight > a4_2height) {
    a4_2.style.opacity = "1";
    a4_2.style.transition = "1.5s";
    a4_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func4_2);

const Func4_3 = function () {
  a4_3height = a4_3.getBoundingClientRect().top + a4_3margin;
  if (window.innerHeight > a4_3height) {
    a4_3.style.opacity = "1";
    a4_3.style.transition = "1.5s";
  }
};
window.addEventListener("scroll", Func4_3);

const Func4_4 = function () {
  a4_4height = a4_4.getBoundingClientRect().top + a4_4margin;
  if (window.innerHeight > a4_4height) {
    a4_4.style.opacity = "1";
    a4_4.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func4_4);

// section5 스크롤시 애니메이션
let section5 = document.querySelector(".section5");
let a5_1 = document.querySelector(".article5-1");
let a5_2 = document.querySelector(".article5-2");
let a5_3 = document.querySelector(".article5-3");

let a5_1margin = 200;
let a5_2margin = 100;
let a5_3margin = 200;
let a5_1height = 0;
let a5_2height = 0;
let a5_3height = 0;

const Func5_1 = function () {
  a5_1height = a5_1.getBoundingClientRect().top + a5_1margin;
  if (window.innerHeight > a5_1height) {
    a5_1.style.opacity = "1";
    a5_1.style.transition = "1.5s";
    a5_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func5_1);

const Func5_2 = function () {
  a5_2height = a5_2.getBoundingClientRect().top + a5_2margin;
  if (window.innerHeight > a5_2height) {
    a5_2.style.opacity = "1";
    a5_2.style.transition = "1.5s";
    a5_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func5_2);

const Func5_3 = function () {
  a5_3height = a5_3.getBoundingClientRect().top + a5_3margin;
  if (window.innerHeight > a5_3height) {
    a5_3.style.opacity = "1";
    a5_3.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func5_3);

// section6 스크롤시 애니메이션
let section6 = document.querySelector(".section6");
let a6_1 = document.querySelector(".article6-1");
let a6_2 = document.querySelector(".article6-2");
let a6_1margin = 200;
let a6_2margin = 100;
let a6_1height = 0;
let a6_2height = 0;

const Func6_1 = function () {
  a6_1height = a6_1.getBoundingClientRect().top + a6_1margin;
  if (window.innerHeight > a6_1height) {
    a6_1.style.opacity = "1";
    a6_1.style.transition = "1.5s";
    a6_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_1);

const Func6_2 = function () {
  a6_2height = a6_2.getBoundingClientRect().top + a6_2margin;
  if (window.innerHeight > a6_2height) {
    a6_2.style.opacity = "1";
    a6_2.style.transition = "1.5s";
    a6_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_2);
