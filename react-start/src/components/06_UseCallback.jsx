import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  //현재 number 잘 출력됨
  const func1 = () => {
    console.log(`number: ${number} 😊`);
  };

  // number가 계속 0으로 됨
  // 처음에 메모리에 저장되었을 떄 0인 상태였으므로 메모리에서 함수를 꺼내면 number는 계속 0일수밖에 없음
  // number를 갱신하고 싶다면 []가 아니라 [number]라고 작성=> number가 바뀔 때마다 func2 갱신 => 함수2변경이 출력됨
  const func2 = useCallback(() => {
    console.log(`number: ${number} 🤣`);
  }, []);

  //func1은 렌더링될 때 지금 주소랑 아까 주소가 다르기 때문에 변경되었으므로 출력됨
  useEffect(() => {
    console.log("함수1 변경");
  }, [func1]);

  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);

  return (
    <>
      <h4>useCallback</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        함수 호출
      </button>

      {/* 이 버튼 누르면 함수1출력만 나옴 => func1은 렌더링될때마다 주소가 바뀌므로 변경되었다고 인식돼서 출력*/}
     {/* =>func2는 처음 메모리에 저장된 주소를 가져다 쓰기 때문에 출력X => 그러나 ,[]에다가 isTrue를 넣으면 해당 값이 바뀔 때마다 렌더링이 되므로 함수2출력도 나올것!! */}
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue.toString()}
      </button>
    </>
  );
}
