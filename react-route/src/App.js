import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import { Index } from "./page/Index";
import { NotFound } from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";
import { Practice } from "./page/Practice";
import { Student } from "./page/Student";

function App() {
  return (
    <>
      <Routes>
        {/* 경로는 여기에 다 선언해주어야 함!! */}
        <Route path="/" element={<Index></Index>} />
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        <Route path="/practice" element={<Practice></Practice>}></Route>
        {/* :뒤에 붙는 단어가 뒤에 계속 사용됨 */}
        <Route path="/student/:studentName" element={<Student />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
        {/* 그 외의 모든 것에게 NotFound를 import */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
