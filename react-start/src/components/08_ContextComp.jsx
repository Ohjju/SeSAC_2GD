import ContextFooter from "./08_ContextFooter";
import ContextHeader from "./08_ContextHeader";
import ContextMain from "./08_ContextMain";

// isDark, setiIsDark를 받아오는 이유는 하위 컴포넌트들에게 데이터를 넘겨주기 위함!
// 이 안에서 연산을 하거나 하지는 않음
// export default function ContextComp({ isDark, setIsDark })
export default function ContextComp() {
  return (
    <>
      {/* 변수 props로 안 받고 컴포넌트만 import해줘도 됨 - 변수 알아서 넘어감 */}
      <ContextHeader></ContextHeader>
      <ContextMain></ContextMain>
      <ContextFooter></ContextFooter>
      {/* <ContextHeader isDark={isDark}></ContextHeader> */}
      {/* <ContextMain isDark={isDark}></ContextMain> */}
      {/* <ContextFooter isDark={isDark} setIsDark={setIsDark}></ContextFooter> */}
    </>
  );
}
