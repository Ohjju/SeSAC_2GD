import { useState } from "react";
import "./styles/basic_css.css";
import style from "./styles/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";
// styled components import
import styled, { keyframes } from "styled-components";

export default function BasicCss({ color }) {
  const childDiv = {
    backgroundColor: "pink",
    width: "150px",
    height: "50px",
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "50px",
  };

  //module.css
  // import Names from "classnames/bind" 해주기
  const setting = Names.bind(style);
  const [isTrue, setIsTrue] = useState(true);
  const stateVal = "first";
  const stateVal2 = true;

  //styled-components 지정
  const rotate = keyframes`
    0%{ transform: rotate(0);}
    50%{transform:rotate(180deg);}
    100%{transform:rotate(360deg);}
  `;
  const H4Title = styled.h4`
    background-color: yellow;
    /* 세로 */
    @media screen and (max-width: 780px) and (orientation: portrait) {
      font-size: 30px;
      color: green;
    }
    /* 가로 */
    @media screen and (max-width: 780px) and (orientation: landscape) {
      font-size: 40px;
      color: red;
    }
  `;

  const ParentDiv = styled.div`
    background-color: #444;
    display: flex;
  `;
  const ChildSpan = styled.span`
    /* color: red; */
    color: ${color ? color : "red"};
    /* 현재 blue로 들어와있으므로 blue색상으로 나올 것임!, 색상default값은 red */
    &:hover {
      color: white;
      cursor: pointer;
      animation: ${rotate} 1s infinite linear;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  `;

  return (
    <>
      <h3>스타일 적용방법</h3>
      <ol>
        <li>인라인 스타일 적용 방법</li>
        <li>css 파일 import</li>
        <li>module.css import</li>
        <li>Styled Component</li>
      </ol>

      <h4 style={{ color: "#111" }}>인라인 스타일로 적용</h4>
      <div style={{ backgroundColor: "#ddd" }}>
        <div style={childDiv}>안녕하세요!</div>
      </div>

      <h4>css 파일 import</h4>
      <div className="box1 second">
        <div>안녕하세요!!</div>
      </div>

      <h4>module.css 파일 import</h4>
      <div className={style.box2}>
        <div>안녕하세요!</div>
      </div>
      <hr />
      <div className={`${style.first} ${style.second}`}>
        클래스 여러개 지정하는 방법1 - 템플릿 리터럴
      </div>
      <div className={[style.first, style.second].join(" ")}>
        클래스 여러개 지정하는 방법2 - 배열과 join(' ')
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스 여러개 지정하는 방법3 - classNames 모듈 활용
      </div>

      {/* first, second 묶어줌 ->setting */}
      <div className={setting("first", "second")}>
        classnames 모듈 사용해보기 - bind 이용
      </div>
      {/* 여기서 second는 키 => second의 값을 true로 지정해준 상태이므로 first와 second가 둘 다 나옴 */}
      <div className={setting("first", { second: true })}>
        classnames 모듈 사용 1
      </div>
      {/* second가 true이면 나오고, fasle이면 안나오게! (값이 어떠냐에 따라 달라짐) */}
      <div className={setting("first", { second: isTrue })}>
        classnames 모듈 사용 2
      </div>
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        click
      </button>
      {/* stateVal2를 true라고 해주어서 stateVal2라는 클래스가 적용되고 있는 상태! */}
      <div className={setting({ stateVal2 }, { second: isTrue }, stateVal)}>
        classnames 모듈 사용 3
      </div>

      <H4Title>styled-components 이용</H4Title>
      <ParentDiv>
        <ChildSpan>child1</ChildSpan>
        <ChildSpan>child2</ChildSpan>
        <ChildSpan>child3</ChildSpan>
      </ParentDiv>
    </>
  );
}
