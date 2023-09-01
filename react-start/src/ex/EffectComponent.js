import { useEffect, useState } from "react";

function EffectComponent() {
  const [count, setCount] = useState(0);

  // 1. 아래의 코드가 처음 만들어질때만 실행되고 밑에서 버튼클릭할 떄 리렌더링될 때는 실행되지 않음
  // 빈배열 [] : 생성될 때(mount) 실행
  useEffect(() => {
    console.log("Run useeffect");
  }, []);

  //2. 아래의 코드는 버튼 클릭때 리렌더링될 떄도 출력됨
  // [무언가 들어있음] : 배열에 있는 값이 변경될 떄마다 실행 (갱신될 때마다, update될 때마다)
  useEffect(() => {
    console.log("Change count");
  }, [count]);

  //3. 화면에서 컴포넌트가 사라질때 (함수를 return하는 경우)
  useEffect(() => {
    return () => {
      console.log("Remove component");
    };
  }, []);

  return (
    <>
      EffectComponent
      <br />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}

export default EffectComponent;
