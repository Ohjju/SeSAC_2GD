import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈으로 가기</Link>
        </li>
        {/* "/profile" = "localhost:3000/profile"와 같음 */}
        <li>
          <Link to="/profile">프로필 페이지로 이동</Link>
        </li>
        <li>
          {/* <a href="/board">게시판 페이지로 이동</a> */}
          <Link to="/board">게시판 페이지로 이동</Link>
        </li>
        <li>
          <Link to="/Practice">실습문제</Link>
        </li>
      </ul>
    </nav>
  );
}
