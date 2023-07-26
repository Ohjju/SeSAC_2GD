// 첫번째 음료 hover
$(".e1_hover").hover(
  function () {
    $(".e1_hover > img").addClass("hover1");
    $(".e1").addClass("hover");
  },
  function () {
    $(".e1_hover > img").removeClass("hover1");
    $(".e1").removeClass("hover");
  }
);

// 두번째 음료 hover
$(".e2_hover").hover(
  function () {
    $(".e2_hover > img").addClass("hover1");
    $(".e2").addClass("hover");
  },
  function () {
    $(".e2_hover > img").removeClass("hover1");
    $(".e2").removeClass("hover");
  }
);

// 세번째 음료 hover
$(".e3_hover").hover(
  function () {
    $(".e3_hover > img").addClass("hover1");
    $(".e3").addClass("hover");
  },
  function () {
    $(".e3_hover > img").removeClass("hover1");
    $(".e3").removeClass("hover");
  }
);

// 네번째 음료 hover
$(".e4_hover").hover(
  function () {
    $(".e4_hover > img").addClass("hover1");
    $(".e4").addClass("hover");
  },
  function () {
    $(".e4_hover > img").removeClass("hover1");
    $(".e4").removeClass("hover");
  }
);

// 다섯번째 음료 hover
$(".e5_hover").hover(
  function () {
    $(".e5_hover > img").addClass("hover1");
    $(".e5").addClass("hover");
  },
  function () {
    $(".e5_hover > img").removeClass("hover1");
    $(".e5").removeClass("hover");
  }
);

// scroll 이벤트
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY < 900) {
    document.querySelector(".backdrop").style.backdropFilter = "blur(0px)";
    document.querySelector(".backdrop").style.backgroundColor =
      "rgba(255, 255, 255, 0)";
    document.querySelector("header").style.opacity = "1";
  } else if (scrollY >= 969 && scrollY <= 6653) {
    document.querySelector(".backdrop").style.backdropFilter = "blur(15px)";
    document.querySelector(".backdrop").style.backgroundColor =
      "rgba(84, 57, 57, 0.25)";
    document.querySelector("header").style.opacity = "1";
  } else if (scrollY > 6653) {
    document.querySelector("header").style.opacity = "0";
  }
});

// 마우스 따라다니는 클릭
const mouse = document.querySelector(".mouseClick");
const section1 = document.querySelector(".section1");

section1.addEventListener("mousemove", function (e) {
  const x = e.pageX;
  const y = e.pageY;
  mouse.style.left = x + "px";
  mouse.style.top = y + "px";
  mouse.style.opacity = "1";
  mouse.style.scale = "1";
});

section1.addEventListener("mouseleave", function (e) {
  mouse.style.opacity = "0";
  mouse.style.scale = "1.1";
});

// main 화면 슬라이딩
const main = document.querySelector("main");
const sentences = document.querySelector(".sentences");
const carousel = document.querySelector(".carousel-item");

const s1 = document.querySelector(".sentence1");
const s2 = document.querySelector(".sentence2");
const s3 = document.querySelector(".sentence3");
const s4 = document.querySelector(".sentence4");
const s5 = document.querySelector(".sentence5");
const s = [s1, s2, s3, s4, s5];

const firstSectionColor = [
  "#5D9061",
  "#D26A51",
  "#ABA35A",
  "#5561C7",
  "#B2956D",
];

// 제품명 화면 바뀔 때마다 바뀌는 효과
index = 1;
section1.addEventListener("click", function () {
  if (index <= 4) {
    main.style.backgroundColor = firstSectionColor[index];
    s[index].style.opacity = "1";
    s[index].style.transition = "1s";
    s[index].style.position = "relative";
    // absolute로 되어있으면 위치가 아래로 내려감
    s[index - 1].style.opacity = "0";
    s[index - 1].style.transition = "0s";
    s[index - 1].style.position = "absolute";
    index += 1;
  } else if (index == 5) {
    main.style.backgroundColor = firstSectionColor[0];
    s[0].style.opacity = "1";
    s[0].style.transition = "1s";
    s[0].style.position = "relative";
    s[4].style.opacity = "0";
    s[4].style.transition = "0s";
    s[4].style.position = "absolute";
    index = 1;
  }
});
