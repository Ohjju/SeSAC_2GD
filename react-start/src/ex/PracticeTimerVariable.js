import { useState } from "react";
import { useEffect } from "react";

let count = 0;
export default function PracticeTimerVariable() {
  const [time, setTime] = useState(count);
  useEffect(() => {
    count = 0;
    setTime(count);
    const timer = setInterval(() => {
      count++;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{time}</h1>
      <button
        onClick={() => {
          setTime(count);
        }}
      >
        시간
      </button>
    </>
  );
}
