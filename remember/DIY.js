/* 상품 변경값 코드*/
//색상 변경 js
//.color-option을 클릭 시 product의 style.backgroundColor값이 변경
const productElement = document.getElementById("product");
const colorOptions = document.querySelectorAll(".color-option");

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedColor = option.style.backgroundColor;
    productElement.style.backgroundColor = selectedColor;
  });
});
//상품 변경 js
//.choice-option을 클릭 시 product의 style.backgroundImage값이 변경
const productsElement = document.getElementById("product");
const choiceOptions = document.querySelectorAll(".choice-option");

choiceOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedChoice = option.style.backgroundImage;
    productElement.style.backgroundImage = selectedChoice;
  });
});
//질감 변경 js
//.texture_option을 클릭 시 product2의 tyle.backgroundImage값이 변경
const productElements = document.getElementById("product2");
const textureOptions = document.querySelectorAll(".texture_option");

textureOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedTexture = option.style.backgroundImage;
    productElements.style.backgroundImage = selectedTexture;
  });
});

//  const productElementFonts = document.getElementById('.box2_contain_text1');
//  const fontOptions = document.querySelectorAll(".font-option");

//  fontOptions.forEach(option => {
//    option.addEventListener("click", () => {
//      const selectedFont = option.getAttribute("data-font");
//      productElementFonts.forEach(p => {
//        p.style.fontFamily = selectedFont;
//      });
//    });
//  });

/*text 변경 값 코드*/

//글자 입력 선언
const submitBtn = document.getElementById("submitButton");
//글자 크키 선언
const fontPlusBtn = document.getElementById("fontPlus");
const fontMinusBtn = document.getElementById("fontMinus");
//글자 이동 선언
const outputDiv = document.getElementById("outputDiv");

//초기 글자 크기 설정
let currentFontSize = 24;
//초기 글자 위치 설정
let offsetX, offsetY;
//초기 글자 이동 여부 설정(true=가능, false=불가능)
let isDragging = false;

//input창에 글씨을 입력하고 입력하기 버튼을 클릭시 생성되는 이벤트 코드
document.getElementById("submitButton").addEventListener("click", function () {
  // 입력한 내용 가져오기
  var inputContent = document.getElementById("inputText").value;
  // 변경할 색 가져오기
  var textColor = document.getElementById("inputColor").value;
  // 내용을 표시할 div 요소 가져오기
  var outputDiv = document.getElementById("outputDiv");

  // 새로운 p 요소 생성하여 내용 추가
  var newParagraph = document.createElement("p");
  // 새로운 p의 요소의 속성
  newParagraph.textContent = inputContent;
  newParagraph.style.color = textColor;
  newParagraph.style.fontSize = currentFontSize + "px";

  // div 내에 p 요소 추가
  outputDiv.appendChild(newParagraph);
  // 입력 창 내용 지우기
  document.getElementById("inputText").value = "";
});

// inputColor 요소의 input 이벤트 리스너 추가
document.getElementById("inputColor").addEventListener("input", function () {
  var textColor = document.getElementById("inputColor").value;
  var outputDiv = document.getElementById("outputDiv");
  // 마지막으로 추가된 p 요소의 텍스트 색상 변경 코드
  var paragraphs = outputDiv.getElementsByTagName("p");
  if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].style.color = textColor;
  }
});
//fontPlusBtn 이벤트(클릭시 크기 4만큼 증가)
fontPlusBtn.addEventListener("click", () => {
  currentFontSize += 4;
  if (currentFontSize > 80) {
    currentFontSize = 80;
  }
  updateFontSizes();
});
//fontPlusBtn 이벤트(클릭시 크기 4만큼 감소)
fontMinusBtn.addEventListener("click", () => {
  currentFontSize -= 4;
  //10 밑으로는 감소 불가
  if (currentFontSize < 10) {
    currentFontSize = 10;
  }
  //글자 크기 반영
  updateFontSizes();
});
//+ - 버튼 클릭시 해당 css의 font-size속성값을  수정 코드
function updateFontSizes() {
  const paragraphs = outputDiv.getElementsByTagName("p");
  for (let paragraph of paragraphs) {
    paragraph.style.fontSize = currentFontSize + "px";
  }
  //color를 선택 했을 때 글자 style의 color값 수정하는 코드
  if (lastAddedParagraph) {
    lastAddedParagraph.style.color =
      document.getElementById("inputColor").value;
  }
}
//글자를 클릭시 isDragging이 true값으로 바뀌면서 outputDiv가 이동가능 해지는 코드
outputDiv.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - outputDiv.getBoundingClientRect().left;
  offsetY = event.clientY - outputDiv.getBoundingClientRect().top;
  outputDiv.style.cursor = "grabbing";
});
//outputDiv를 이동시 좌표?
document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const x = event.clientX - offsetX;
  const y = event.clientY - offsetY;
  outputDiv.style.left = x + "px";
  outputDiv.style.top = y + "px";
});
//글자에서 클릭이 해제 되는 순간  isDragging값이 false값으로 고정
document.addEventListener("mouseup", () => {
  isDragging = false;
  outputDiv.style.cursor = "grab";
});

const productElementFonts = document.getElementsByTagName("p");
const fontOptions = document.querySelectorAll(".font-option");

fontOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedFont = option.style.fontFamily;
    productElementFonts.forEach((p) => {
      p.style.fontFamily = selectedFont;
    });
  });
});

//구입하기 버튼 클릭시 표시되는 alert(sweet alert!)
function buy() {
  Swal.fire({
    title: "선택하신 상품을 구매하시겠습니까?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "구매",
    denyButtonText: `장바구니 담기`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("구매완료!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("장바구니 기능은 준비중입니다!", "", "info");
    }
  });
}
