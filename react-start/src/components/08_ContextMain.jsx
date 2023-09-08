import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export default function ContextMain({ isDark })
export default function ContextMain() {
  // 여기서만 useContext 선언해주면 됨
  const { isDark } = useContext(ThemeContext);
  return (
    <main
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>안녕하세요</p>
    </main>
  );
}
