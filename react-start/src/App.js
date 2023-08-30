import ClassCom from "./components/ClassCom";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
// export default가 아니기 때문에 {}안에 감싸서 import 해주어야함
import ClassState from "./components/ClassState";
import FunctionProps from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import UseJSX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import PracticeProps from "./components/practice/PracticeProps";
import UseStatePractice from "./components/practice/UseStatePractice";

function App() {
  return (
    <div>
      <UseJSX></UseJSX>
      {/* 실습1 - firstpractice */}
      <FirstPractice></FirstPractice>
      <ClassCom />
      <FunctionState />
      {/* <ClassState /> */}
      <UseStatePractice />
      <FunctionProps name="사과" krPrice={5000} number={10} />
      <FunctionProps name="샤인머스켓" krPrice={35000} number={3} />
      <FunctionProps name="복숭아" />
      <FunctionProps>여기가 children입니다.</FunctionProps>
      <PracticeProps />
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cd" />
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
    </div>
  );
}

export default App;
