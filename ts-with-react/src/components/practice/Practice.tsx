import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <h1>practice page</h1>
      <Link to={"./matzip"}>맛집 목록</Link>
    </>
  );
}
