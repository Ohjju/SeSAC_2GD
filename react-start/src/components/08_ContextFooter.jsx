import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
// export default function ContextFooter({ isDark, setIsDark })

export default function ContextFooter() {
  // 여기서만 useContext 선언해주면 됨
  // themecontext를 object형태로 가져와서 {isData: false, setIsDark:()=>{}}}
  //{isdark}값만 구조분해할당으로 뽑은 것!
  const { isDark } = useContext(ThemeContext);
  const { setIsDark } = useContext(ThemeContext);

  return (
    <footer
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        모드변경
      </button>
    </footer>
  );
}
