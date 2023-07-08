/*jq val() 사용*/
function getValue() {
  // input의 value를 가지고와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료 ~~");
}

/* css() 사용 */
function changeCssJs() {
  // span의 글씨크기 20px
  // 글자 색깔 빨간색
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function changeCssJq() {
  // 글자크기 40px
  // 글자색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJq() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
  //   a.href='https://www.naver.com'
}
function changeAttrJq() {
  // 다음으로 이동
  //   target='_self' 로 변경
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("target", "_self");
}

/* text() */
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js 로 변경 &hearts;";
}

function changeTextJq() {
  $(".p-text").text("jq로 변경 &hearts;");
}

/* html() */
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js 로 변경 &hearts;";
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}
