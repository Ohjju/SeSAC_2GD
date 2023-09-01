import { useEffect, useState } from "react";

export default function PracticeTimerState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      console.log(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  //state는 상태이므로 계속 0인 상태, []라고 하면 count+1이 되고 다시 0으로 초기화되기 때문에 0과 1만 계속 반복(우리 눈에는 1만 보임)
  //[count]하면 count가 +1 되고 타이머를 없앰 - 이걸 count가 바뀔 떄마다 반복해서 우리 눈에는 1씩 커지는 것처럼 보임

  return (
    <>
      {count}
      <br></br>
      <button>시간</button>
    </>
  );
}
