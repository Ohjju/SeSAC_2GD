// section3 스크롤하면 글씨 나타나는 애니메이션
let s3 = document.querySelector(".section3");
let a3_0 = document.querySelector(".article3-0");
let a3_1 = document.querySelector(".article3-1");
let a3_2 = document.querySelector(".article3-2");
let a3_3 = document.querySelector(".article3-3");
let a3_4 = document.querySelector(".article3-4");
let a3_5 = document.querySelector(".article3-5");
let a3_6 = document.querySelector(".article3-6");
const a = [a3_0, a3_1, a3_2, a3_3, a3_4, a3_5];

let t1 = document.querySelector(".article3-1 .temp1");
let t2 = document.querySelector(".article3-2 .temp2");
let t3 = document.querySelector(".article3-3 .temp3");

let a0 = a3_0.offsetHeight;
let a1 = a3_1.offsetHeight;
let a2 = a3_2.offsetHeight;
let a3 = a3_3.offsetHeight;
let a4 = a3_4.offsetHeight;
let a5 = a3_5.offsetHeight;
let a6 = a3_6.offsetHeight;

let a0_1 = a0 + a1;
let a0_2 = a0 + a1 + a2;
let a0_3 = a0 + a1 + a2 + a3;
let a0_4 = a0 + a1 + a2 + a3 + a4;
let a0_5 = a0 + a1 + a2 + a3 + a4 + a5;
let a0_6 = a0 + a1 + a2 + a3 + a4 + a5 + a6;

window.addEventListener("wheel", (e) => {
  let wheel = e.wheelDeltaY;
  if (wheel < 0) {
    if (scrollY > height1 + 200 && scrollY <= a0_1) {
      a3_0.classList.add("show");
    } else if (scrollY > a0_1 + 200 && scrollY <= a0_2) {
      a3_1.classList.add("show");
      a3_0.classList.remove("show");
      t1.classList.add("font_17");
      t1.style.transition = "0.5s";
    } else if (scrollY > a0_2 + 200 && scrollY <= a0_3) {
      a3_2.classList.add("show");
      a3_1.classList.remove("show");
      t2.classList.add("font_17");
      t2.style.transition = "0.5s";
    } else if (scrollY > a0_3 + 200 && scrollY <= a0_4) {
      a3_3.classList.add("show");
      a3_2.classList.remove("show");
      t3.classList.add("font_17");
      t3.style.transition = "0.5s";
    } else if (scrollY > a0_4 + 200 && scrollY <= a0_5) {
      a3_4.classList.add("show");
      a3_3.classList.remove("show");
    } else if (scrollY > a0_5 + 200 && scrollY <= a0_6) {
      a3_5.classList.add("show");
      a3_4.classList.remove("show");
      s3.style.opacity = "1";
      s3.style.transition = "0.5s";
    } else if (scrollY > a0_6 + 200) {
      a3_5.classList.remove("show");
      s3.style.opacity = "0";
      s3.style.transition = "0.5s";
    }
  } else if (wheel > 0) {
    if (scrollY > height1 + 200 && scrollY <= a0_1) {
      a3_0.classList.remove("show");
    } else if (scrollY > a0_1 + 200 && scrollY <= a0_2) {
      a3_0.classList.add("show");
      a3_1.classList.remove("show");
      t1.classList.remove("font_17");
      t1.style.transition = "0.5s";
    } else if (scrollY > a0_2 + 200 && scrollY <= a0_3) {
      a3_1.classList.add("show");
      a3_2.classList.remove("show");
      t1.classList.add("font_17");
      t1.style.transition = "0.5s";
      t2.classList.remove("font_17");
      t2.style.transition = "0.5s";
    } else if (scrollY > a0_3 + 200 && scrollY <= a0_4) {
      a3_2.classList.add("show");
      a3_3.classList.remove("show");
      t2.classList.add("font_17");
      t2.style.transition = "0.5s";
      t3.classList.remove("font_17");
      t3.style.transition = "0.5s";
    } else if (scrollY > a0_4 + 200 && scrollY <= a0_5) {
      a3_3.classList.add("show");
      a3_4.classList.remove("show");
      t3.classList.add("font_17");
      t3.style.transition = "0.5s";
    } else if (scrollY > a0_5 + 200 && scrollY <= a0_6) {
      a3_4.classList.add("show");
      a3_5.classList.remove("show");
      s3.style.opacity = "1";
      s3.style.transition = "0.5s";
    } else if (scrollY > a0_6 + 200) {
      a3_5.classList.add("show");
      s3.style.opacity = "0";
      s3.style.transition = "0.5s";
    }
  }
});

// section4 스크롤시 애니메이션
let a4_1 = document.querySelector(".article4-1");
let a4_2 = document.querySelector(".article4-2");
let a4_3 = document.querySelector(".article4-3");
let a4_4 = document.querySelector(".article4-4");
let cloud = document.querySelector("#cloud");

let a4_1margin = 50;
let a4_2margin = 50;
let a4_3margin = 100;
let a4_4margin = 150;
let a4_1height = 0;
let a4_2height = 0;
let a4_3height = 0;
let a4_4height = 0;

const Func4_1 = function () {
  a4_1height = a4_1.getBoundingClientRect().top + a4_1margin;
  if (window.innerHeight > a4_1height) {
    a4_1.style.opacity = "1";
    a4_1.style.transition = "1s";
    a4_1.style.marginTop = "50px";
    cloud.style.transform = "translate(500px, 0px)";
    cloud.style.scale = "1.6";
    cloud.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func4_1);

const Func4_2 = function () {
  a4_2height = a4_2.getBoundingClientRect().top + a4_2margin;
  if (window.innerHeight > a4_2height) {
    a4_2.style.opacity = "1";
    a4_2.style.transition = "1.2s";
    a4_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func4_2);

const Func4_3 = function () {
  a4_3height = a4_3.getBoundingClientRect().top + a4_3margin;
  if (window.innerHeight > a4_3height) {
    a4_3.style.opacity = "1";
    a4_3.style.transition = "1.2s";
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
let a5_1 = document.querySelector(".article5-1");
let a5_2 = document.querySelector(".article5-2");
let a5_3 = document.querySelector(".article5-3");
let trash = document.querySelector("#trash");

let a5_1margin = 200;
let a5_2margin = 100;
let a5_3margin = 150;
let a5_1height = 0;
let a5_2height = 0;
let a5_3height = 0;

const Func5_1 = function () {
  a5_1height = a5_1.getBoundingClientRect().top + a5_1margin;
  if (window.innerHeight > a5_1height) {
    a5_1.style.opacity = "1";
    a5_1.style.transition = "1.2s";
    a5_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func5_1);

const Func5_2 = function () {
  a5_2height = a5_2.getBoundingClientRect().top + a5_2margin;
  if (window.innerHeight > a5_2height) {
    a5_2.style.opacity = "1";
    a5_2.style.transition = "1.2s";
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
    a6_1.style.transition = "1.2s";
    a6_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_1);

const Func6_2 = function () {
  a6_2height = a6_2.getBoundingClientRect().top + a6_2margin;
  if (window.innerHeight > a6_2height) {
    a6_2.style.opacity = "1";
    a6_2.style.transition = "1.2s";
    a6_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_2);

// section7 스크롤시 box 올라오는 애니메이션
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let b1_margin = 200;
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

let b2_margin = 300;
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
let b3_margin = 50;
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

// 사진 hover 애니메이션
let img4_3 = document.querySelector(".article4-3 > img");
let img4_4 = document.querySelector(".article4-4 > img");
let img5_3 = document.querySelector(".article5-3 > img");
const img = [img4_3, img4_4, img5_3];

for (let index = 0; index < 3; index++) {
  if (!img[index].classList.contains("scale_up")) {
    img[index].addEventListener("mouseover", function () {
      this.classList.add("scale_up");
      this.classList.remove("scale_down");
    });
  }
  if (!img[index].classList.contains("scale_down")) {
    img[index].addEventListener("mouseleave", function () {
      this.classList.remove("scale_up");
      this.classList.add("scale_down");
    });
  }
}

//color hover 애니메이션
let a7_1 = document.querySelector(".article7-1");
let a7_2 = document.querySelector(".article7-2");
let a7_3 = document.querySelector(".article7-3");
const a7 = [a7_1, a7_2, a7_3];

let i1 = document.querySelector(".box1 .flex i");
let hand = document.querySelector(".box1 .flex .hand");
let i2 = document.querySelector(".box2 .flex i");
let half = document.querySelector(".box2 .flex .half");
let i3 = document.querySelector(".box3 .flex i");
let energy = document.querySelector(".box3 .flex .energy");
const i = [i1, i2, i3];
const title = [hand, half, energy];
const color = ["color_blue", "color_orange", "color_green"];

for (let index = 0; index < 3; index++) {
  if (
    !i[index].classList.contains(color[index]) &&
    !title[index].classList.contains(color[index])
  ) {
    a7[index].addEventListener("mouseover", function () {
      i[index].classList.add(color[index]);
      title[index].classList.add(color[index]);
      i[index].classList.remove("color_off");
      title[index].classList.remove("color_off");
    });
  }
  if (
    !i[index].classList.contains("color_off") &&
    !title[index].classList.contains("color_off")
  ) {
    a7[index].addEventListener("mouseleave", function () {
      i[index].classList.remove(color[index]);
      title[index].classList.remove(color[index]);
      i[index].classList.add("color_off");
      title[index].classList.add("color_off");
    });
  }
}

// gray_header 이벤트
const body = document.querySelector("body");
const header = document.querySelector(".header");
let section1 = document.querySelector(".section1");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let section7 = document.querySelector(".section7");

let gray_header = document.querySelector(".gray_header");
let backdrop = document.querySelector(".gray_header .backdrop");
let menu1 = document.querySelector(".gray_header .menu1");
let menu2 = document.querySelector(".gray_header .menu2");
let menu3 = document.querySelector(".gray_header .menu3");

let scrollHeight = body.scrollHeight;
let height1 = section1.offsetHeight;
let height3 = section3.offsetHeight;
let height4 = section4.offsetHeight;
let height5 = section5.offsetHeight;
let height6 = section6.offsetHeight;
let height7 = section7.offsetHeight;
let h1_3 = height1 + height3;
let h1_4 = height1 + height3 + height4 + 200;
let h1_5 = height1 + height3 + height4 + height5 + 350;
let h1_7 = height1 + height3 + height4 + height5 + height6 + height7 + 300;

window.addEventListener("scroll", () => {
  if (scrollY <= h1_3) {
    backdrop.style.backdropFilter = "blur(0px)";
    gray_header.style.opacity = "0";
    gray_header.style.transition = "0.5s";
    section7.style.opacity = "1";
    header.style.opacity = "1";
  } else if (scrollY > h1_3 && scrollY <= h1_4) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.3s";
    menu1.style.transition = "0.1s";
    menu1.classList.add("menu_on");
    menu2.classList.remove("menu_on");
    menu3.classList.remove("menu_on");
    header.style.opacity = "0";
    header.style.transition = "0.3s";
    section7.style.opacity = "1";
  } else if (scrollY > h1_4 && scrollY <= h1_5) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.3s";
    menu2.style.transition = "0.1s";
    menu1.classList.remove("menu_on");
    menu2.classList.add("menu_on");
    menu3.classList.remove("menu_on");
    header.style.opacity = "0";
    section7.style.opacity = "1";
  } else if (scrollY > h1_5 && scrollY <= h1_7) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.3s";
    menu3.style.transition = "0.1s";
    menu1.classList.remove("menu_on");
    menu2.classList.remove("menu_on");
    menu3.classList.add("menu_on");
    header.style.opacity = "0";
    section7.style.opacity = "1";
  } else if (scrollY > h1_7) {
    gray_header.style.opacity = "0";
    gray_header.style.transition = "0.5s";
    section7.style.opacity = "0";
    header.style.opacity = "0";
    section7.style.transition = "0.5s";
  }
});
