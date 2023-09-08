import "../styles/style.scss";
import img1 from "../assets/img1.png";
import UseScss01 from "./UseScss01.jsx";

export default function UseScss() {
  return (
    <>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">HI1</div>
        <div className="box2">HI2</div>
        <div className="box2">HI3</div>
        <div className="box2">HI4</div>
      </div>

      <br></br>
      <h2>참고 - 이미지 적용하기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      {/* 경로명으로 접근하는 건 사진이 안뜸 -> 좋지 않은 방법 */}
      <img src="../assets/img1.png" alt="경로명으로 접근" width={"100px"} />
      {/* import로 접근하기!!!! => favicon뺴고는 모두 src 내부에서 import하는게 제일 좋은 방법*/}
      <img src={img1} alt="import로 접근" width={"100px"} />
      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      {/* public 폴더에 이미지 있는 걸 가져오므로 /으로 시작 => 근데 리액트에서 선호X*/}
      {/* <img src="/img1.png" alt="public 폴더 사진 접근" width={"100px"} /> */}
      {/* process.env.PUBLIC_URL => 이거 추천!! */}
      <div className="src-img img-test"></div>

      <img
        src={process.env.PUBLIC_URL + "/img1.png"}
        alt="public 폴더 사진 접근"
        width={"100px"}
      />
      <div className="public-img img-test"></div>

      <br></br>
      <br></br>

      <h1>실습문제</h1>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <UseScss01 />
    </>
  );
}
