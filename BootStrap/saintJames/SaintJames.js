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
const section1 = document.querySelector(".section1");
const section7 = document.querySelector(".section7");
const body = document.querySelector("body");
const height1 = section1.offsetHeight;
// section1의 높이
const scrollHeight = body.scrollHeight;
// 전체의 길이
const height7 = section7.offsetHeight;
// section7의 길이
const h = scrollHeight - height7;
// section7에서는 header 안보이므로
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY < height1) {
    document.querySelector(".backdrop").style.backdropFilter = "blur(0px)";
    document.querySelector(".backdrop").style.backgroundColor =
      "rgba(255, 255, 255, 0)";
    document.querySelector("header").style.opacity = "1";
  } else if (scrollY >= height1 && scrollY < h) {
    document.querySelector(".backdrop").style.backdropFilter = "blur(15px)";
    document.querySelector(".backdrop").style.backgroundColor =
      "rgba(84, 57, 57, 0.25)";
    document.querySelector("header").style.opacity = "1";
  } else if (scrollY > h) {
    document.querySelector("header").style.opacity = "0";
  }
});

// 마우스 따라다니는 클릭
const mouse = document.querySelector(".mouseClick");

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
const carousel = document.querySelector(".carousel");
const items = document.querySelector(".items");
const c_item = document.querySelector(".c-item");
const img = document.querySelector("img");

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

const firstSectionImg = [
  "https://cdn.sanity.io/images/c60rax1h/production/0cbe71e389385c65fd3d1a064e1830755b18ec14-880x1222.png?w=1000&h=1389&q=80&fit=max&auto=format",
  "https://cdn.sanity.io/images/c60rax1h/production/6c410d8e1417b2bdc2a1dcca1f347562c4e5ea9c-880x1222.png?w=800&h=1111&q=80&fit=max&auto=format",
  "https://cdn.sanity.io/images/c60rax1h/production/d52f3cbb2051fd39cfd544a1896a6428d1966d6d-880x1222.png?w=800&h=1111&q=80&fit=max&auto=format",
  "https://cdn.sanity.io/images/c60rax1h/production/6f111ee96c01a436f6e3be2da3af301da516b4a8-800x1111.png?w=800&h=1111&q=80&fit=max&auto=format",
  "https://cdn.sanity.io/images/c60rax1h/production/eebfadc5552d57ee7c4afb4a3e1a975751492f48-880x1222.png?w=1000&h=1389&q=80&fit=max&auto=format",
];

// 제품명: 화면 바뀔 때마다 바뀌는 효과
index = 1;
index2 = 1;
itemWidth = c_item.offsetWidth;
section1.addEventListener("click", function () {
  items.style.transform = `translate(${-itemWidth * index2}px,0%)`;
  //화면 크기를 바꾸면 원래의 넓이만큼 움직이고 새로고침이 안됨 (새로고침해서 다시 해보면 되긴 함)

  items.style.transition = "0.6s cubic-bezier(0, 0.6, 0.4, 1)";
  // click할 때마다 위치가 다시 처음으로 돌아가서 이동하므로 이동거리를 계속 증가시켜줌
  index2 += 1;
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

  // 반복
  makeClone();
  // a.cloneNode(true) : a 요소의 자식까지 모두 복사
  function makeClone() {
    for (i = 0; i < 5; i++) {
      const c = c_item.cloneNode(true);
      img.setAttribute("src", firstSectionImg[i]);
      // c_item > f > img가 변함
      items.appendChild(c);
    }
  }
});
