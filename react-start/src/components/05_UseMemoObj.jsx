import { useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 그냥 오브젝트로 저장 -> 주소를 저장하게 됨
  // const location = {
  // country: isKorea ? "한국" : "외국",
  // };

  //   usememo사용하면 console.log 출력이 숫자바뀔때는 안바뀜
  //   const location = useMemo(() => {
  //     return {
  //       country: isKorea ? "한국" : "외국",
  //     };
  //   }, [isKorea]);
  // 오브젝트나 배열을 useEffect의 의존성 배열에 넣지 않아도 되는 경우라면,
  // usememo를 사용하지 않는 편이 낫다!

  // 주소가 아닌 값을 저장
  //오브젝트 -> 문자열로 변경하는 게 효율 측면에서 좋음!
  const location = isKorea ? "한국" : "외국";

  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다. ❤️");
  }, [location]);
  //그냥 하면 숫자가 바뀔때도 출력됨 - 숫자가 바뀌면 전체가 렌더링되면서 위치가 다시 변경되기 떄문?

  return (
    <>
      <h4>useMemo 써보기</h4>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <div>{number}</div>
      <hr />
      <div>{location.country}</div>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        나라 바꾸기
      </button>
    </>
  );
}
