//console.log(window);
//javaScript
console.log($(window));
//jquery

//console.log(document);
//javaScript
console.log($(document));
//jquery -> 항상 $()로 접근하기

//mouse event (addeventlistener 대신 on 사용 = 둘이 같은 으미)
//click
$(".p-msg").on("click", function () {
  $(".p-msg").css("color", "blue");
  //$(this).css("color", "blue");  => this는 자기자신을 가리킴
});

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// //배열로 들어오지 않아서 그냥 사용해도 됨
// $(".num").click(function () {
//   //   $(".num").css("color", "yellow"); => 전부 적용
//   $(this).css("color", "tomato");
// });

//JS - 배열로 들어오므로 for문 사용
const nums = document.querySelectorAll(".num");
// [one,two,three,four]
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    // nums[i].style.color = "tomato";
  });
}

//mouseover -> hover와 다르게 마우스 뗄 때도 자동 적용!
// $(".numbers").on("mouseover", () => {
//   $(".numbers").css("background-color", "skyblue");
//   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
// });

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "pink");
//   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
// });

//hover() - js는 없지만 jq는 가능
//올라갔을 떄가 첫번쨰 func, 땠을때는 두번쨰 func으로 인자가 2개 필요함
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//scroll (window에 걸어줌)
// window.addEventListener("scroll", () => {
//   console.log("scroll");
// });
//밑에와 같은 의미
$(window).scroll(() => {
  console.log("scroll!!");
});

//key event (커서올린채로 방향키 누를때)
//keydown: 키보트가 눌렸을 때
$(".input-key").keydown(function (e) {
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "Enter" || e.code === "NumpadEnter") {
    console.log("엔터!!");
  }
});

//form event
$("#form").submit(function (e) {
  e.preventDefault();
  //동작 새로고침 막음!(이벤트 막기)
  const todo = $("#todo").val();
  //js는 value로 값 가져오고 jq는 val로 값 가져옴

  //jq는 create머시기 못씀
  console.log(todo);
  $(".todos").append(`<li>${todo}</li>`); //ul에 li를 만들고 추가(한줄에)(creat와 append 한번에)

  $("#todo").val(""); //input 초기화
});
