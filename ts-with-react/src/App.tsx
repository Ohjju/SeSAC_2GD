import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/practice/Home";
import Lecture from "./components/practice/Lecture";
import Practice from "./components/practice/Practice";
import Matzip from "./components/practice/Matzip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/matzip" element={<Matzip />} />
      </Routes>
    </>
  );
}

export default App;
