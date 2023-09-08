import { useContext } from "react";
// 주소 주의!
import { ThemeContext } from "../contexts/ThemeContext";

// export default function ContextHeader({ isDark })
export default function ContextHeader() {
  // 여기서만 useContext 선언해주면 됨
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>header</h1>
    </header>
  );
}
