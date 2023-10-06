// TodoDropdown에서 color(입력받은 boxColor) 받아와서 TodoBoX style 변경
export const ChangeColor = (inputcolor) => {
  // const current = document.querySelector(".todoBox") as HTMLInputElement;
  current.style.background = `linear-gradient(90deg, var(${inputcolor}) 12px, #ffffff 12px)`;
};
