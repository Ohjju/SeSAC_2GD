interface Props {
  name: string;
}

//객채구조분해할당
function PropsType1({ name }: Props) {
  return <h2>hello, {name}</h2>;
}

interface Square1 {
  //   width: string;
  //   height: string;
  //   color: string;
  //한방에 쓰기
  [key: string]: string;
}

//변수
function PropsType2(props: Square1) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
    border: `1px solid ${props.borderColor}`,
  };
  return <div style={divStyle}></div>;
}

interface Square2 {
  width: number;
  height: number;
  color?: string;
  text: string;
}

const PropsType3 = (props: Square2) => {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color ? color : "pink"}`,
    textAlign: "center",
    lineHeight: `${height}px`,
  };
  //color props는 optional: 데이터가 전달될 수도 있고 전달되지 않을수도 있음
  //전달되지 않았을 경우를 삼항연산자로 처리할 수 있다.

  return <div style={divStyle}>{text}</div>;
};

export { PropsType1, PropsType2, PropsType3 };
