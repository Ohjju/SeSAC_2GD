import { useState } from "react";
import ContextComp from "./08_ContextComp";
import "../styles/context.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeProvider } from "styled-components";

export default function ContextTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h4>useContext</h4>
      {isDark ? "다크모드입니다." : "라이트모드입니다."}
      {/* useContext 사용!! - 모든 하위컴포넌트에서 isDark, setIsDark 사용 가능 */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ContextComp></ContextComp>
      </ThemeContext.Provider>

      {/* <ContextComp isDark={isDark} setIsDark={setIsDark}></ContextComp> */}
    </>
  );
}
