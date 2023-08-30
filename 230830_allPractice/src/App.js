import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("apple");
  const [background, setBackground] = useState("black");
  const [color, setColor] = useState("white");
  const [content, setContent] = useState("text");
  // 위의 4개를 state로 하나로 합칠 수 있음
  // const [data, setData] = useState({
  //   fruit: "apple",
  //   background: "black",
  //   color: "white",
  //   content: "text",
  // });

  
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          setFruit={setFruit}
          setBackground={setBackground}
          setColor={setColor}
          // setData={setData}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input
          setContent={setContent}
          // setData={setData}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result
          fruit={fruit}
          backgroundColor={background}
          color={color}
          content={content}
          // data={data}
          //하나로 합쳤을 경우
        />
        {/* <Result data={{fruit, backgruond, color, content}}/> */}
        {/* 원래는 오브젝트안에 키:변수 형태로 적어야하지만, 변수만 적으면 변수랑 같은 이름을 가진 키로 생성하게 됨(더 간편) */}
        {/* 단축하지 않으면 fruit:fruit .. 이런식 */}
      </div>
    </>
  );
}

export default App;
