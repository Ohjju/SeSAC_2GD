import { useEffect, useRef, useState } from "react";
export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력 하세요!");
  const inputValue = useRef();
  const onButtonClick = () => {
    setCount(count + 1);
  };
  const onInputChange = () => {
    setText(inputValue.current.value);
  };

  //useEffect(( )=>{}) -> 항상 (생성, 업데이트, 소멸)
  //useEffect(( )=>{}, []) -> 생성 시에만(컴포넌트 불러올 때)
  //쇼핑몰에서 가장 처음 사용자에게 보여줘야 하는 부분과 연관된 것들
  //useEffect(( )=>{}, [값]) -> 값이 바뀔 때마다
  //쇼핑몰 상품리스트에서 카테고리 누르면
  // useEffect(( )=>{return 함수},[]) -> 컴포넌트가 실제로 화면에서 소멸될 떄(display:none이랑 다름 이건 잠시 안보이게 하는 것, 자체가 사라진게 아님)
  // 인증할 때 타이머 있는 경우 (시간 다 되면 소멸되게)
  // 타이머 같은 경우는 아예 소멸시켜주지 않으면 꺼도 백그라운드에서 계속 실행돼서 큰일남
  //unmount 사용해서 아예 소멸시켜줘야 함

  // 빈배열 없이 한 경우 - 모든 상황에서 실행
  //   useEffect(() => {
  //     console.log("🎨 렌더링 할 때마다 실행되는 useEffect");
  //   });

  // 빈배열 있는 경우 - 최초 생성 시에만 실행
  useEffect(() => {
    console.log("🎨 렌더링 할 때마다 실행되는 useEffect");
  }, []);

  useEffect(() => {
    console.log("🖱 버튼 클릭 시에만 실행되는 useEffect");
  }, [count]);

  useEffect(() => {
    console.log("⌨ 인풋 입력 시에만 실행되는 useEffect");
  }, [text]);

  useEffect(() => {
    return () => {
      console.log("사라질 때 실행되는 useEffect");
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange}></input>
      <h1>{text}</h1>
    </>
  );
}
