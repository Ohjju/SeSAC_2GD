function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);
  // isClick=true인 상태
  const text = isClick ? "클릭이 되었군요!" : "hello, react world!";
  // button
  // button > div > span으로 구 변경(html과 js를 같이 사용 - JSX)
  return (
    <button onClick={() => setIsClick(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}

const elelment = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
root.render(<HelloWorldButton />);
