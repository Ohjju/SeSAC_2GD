import { Link } from "react-router-dom";
import styled from "styled-components";

export const Practice = () => {
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    height: 70px;
    background-color: #8a87eb;
    justify-content: end;
    align-items: center;
  `;

  const MyLink = styled(Link)`
    color: #ffff00;
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 18px;
    &:hover {
      color: white;
    }
  `;

  return (
    <>
      <h2>ReactRouter 실습</h2>

      <Nav>
        <MyLink to="/student/sean">학생</MyLink>
        <MyLink to="/student/codingon">코딩온</MyLink>
        <MyLink to="/student/new?name=jisoo">쿼리 이용</MyLink>
      </Nav>
    </>
  );
};
