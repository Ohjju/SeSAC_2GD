function Result(props) {
  const { fruit, background, color, content } = props;
  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
        {/* 
          case1. content의 내용을 바꾼다는 가정
          (세팅1)
          App 컴포넌트 content state를 만들고,
          <Input> 컴포넌트에 content state를 변경할 수 있는 setContent 함수를 전달
          <Input> 컴포넌트 안에서는 <input>태그에 setContent 함수를 연결
          (세팅2)
          App에 있는 content state를 <Result> 컴포넌트에 전달
          <Result> 컴포넌트에서는 전달받은 content state를 보여준다.
          (동작)
          1. <input> 태그에 글자를 입력
          2. <input> 태그에 onChange라는 이벤트가 발동(변화가 생겼으니까)
          3. onChange 이벤트에 연결된 함수를 실행
          -> setContent 함수를 실행
          -> setContent에 어떤 값을 parameter로 넘겨주냐? 현재 변경된 input의 값
          4. <Input> 컴포넌트의 setContent = <App> 컴
          포넌트의 setContent => content state 변경
          5. <App> 컴포넌트의 content = <Result> 컴포넌트의 content
          6. => Result에서 보여지는 content가 변경

          )
        */}
      </div>
    </div>
  );
}

export default Result;
