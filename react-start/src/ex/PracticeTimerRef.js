import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function PracticeTimerRef() {
  const count = useRef(0);
  const [render, setRender] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current += 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender(render + 1);
        }}
      >
        시간
      </button>
    </>
  );
}
