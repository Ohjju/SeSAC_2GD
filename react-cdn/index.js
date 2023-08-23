function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);
  // isClick=true인 상태
  const text = isClick ? "클릭이 되었군요!" : "hello, react world!";
  // button
  // button > div > span으로 구 변경
  return React.createElement(
    "button",
    {
      onClick: () => setIsClick(!isClick),
    },
    React.createElement("div", null, React.createElement("span", null, text))
  );
}

const elelment = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
root.render(elelment(HelloWorldButton));
