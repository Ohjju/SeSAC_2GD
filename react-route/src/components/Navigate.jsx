import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigate() {
  const inputRef = useRef();

  const Div = styled.div`
    border: 1px solid black;
    padding: 4px;
    box-shadow: 0px 0px 5px #777777aa;
    border-radius: 8px;
    background-color: greenyellow;
  `;

  const navigate = useNavigate();

  // 프로필페이지 버튼에 조건을 걸어줌 (navigate 사용)
  const controlProfile = () => {
    if (inputRef.current.value.length > 5) {
      //인풋창의 글자의 길이가 5가 넘는다면
      //프로필 페이지로 이동
      navigate("/profile");
    } else {
      //그렇지 않다면 홈페이지로
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "pink",
          justifyContent: "space-evenly",
        }}
      >
        <Div onClick={() => navigate(-1)}>뒤로가기</Div>
        <Div onClick={() => navigate(1)}>앞으로 가기</Div>
        <Div onClick={() => navigate(-2)}>뒤로 2번 가기</Div>
        <Div onClick={() => navigate("/")}>홈으로 가기</Div>
        <Div onClick={() => navigate("/board")}>보드페이지</Div>
        <Div onClick={() => controlProfile()}>프로필 페이지</Div>
      </div>

      <input type="text" ref={inputRef} />
    </>
  );
}
