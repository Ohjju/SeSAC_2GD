import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

// 내가 한 거 실습
// function App() {
//   const rotate = keyframes
//`0%{ transform: rotate(0);}100%{transform:rotate(360deg);}`;

//   const RootDiv = styled.div`
//     text-align: center;
//     background-color: #282c34;
//     height: 100vh;
//   `;

//   const AppHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     height: 100%;
//   `;

//   const AppLogo = styled.img`
//     height: 40vmin;
//     animation: ${rotate} 20s infinite linear;
//   `;

//   const MyA = styled.a`
//     color: #61dafb;
//   `;

//   return (
//     <RootDiv>
//       <AppHeader>
//         <AppLogo src={logo} alt="app" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <MyA
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </MyA>
//       </AppHeader>
//     </RootDiv>
//   );
// }

// export default App;

// 리더님꺼
// keyframes 사용법 익히기!
function App() {
  const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

  const RootDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
    //rotate를 사용하려면 위에 먼저 선언이 되어있어야 함!
  `;

  const MyA = styled.a`
    color: #61dafb;
  `;

  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default App;
