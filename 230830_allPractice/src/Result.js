function Result(props) {
  // data로 받음(props로 받아도 됨)
  // data = {fruit:" ", ...}
  // const { img, backgroundColor, color, content } = props.data;
  // 하나로 합쳤을 경우임

  //단축하지 않으면
  // const fruit = props.data.fruit
  const { fruit, backgroundColor, color, content } = props;

  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: backgroundColor,
          color: color,
          // {color} 이거 아니고 그냥 넣음 키:값이므로
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
