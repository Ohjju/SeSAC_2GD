import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import { Index } from "./page/Index";
import { NotFound } from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index></Index>} />
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        {/* 그 외의 모든 것에게 NotFound를 import */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
