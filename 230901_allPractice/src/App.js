import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
  const [fruit, setFruit] = useState("apple");
  const [background, setBackground] = useState("black");
  const [color, setColor] = useState("white");
  const [content, setContent] = useState("text");
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          setFruit={setFruit}
          setBackground={setBackground}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setContent={setContent} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result
          fruit={fruit}
          background={background}
          color={color}
          content={content}
        />
      </div>
    </>
  );
}

export default App;
