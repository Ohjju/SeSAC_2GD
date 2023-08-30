function Test() {
  const clickTest = (event) => {
    console.log("target:", event.target);
    //이벤트를 실행하기 위해 실제로 누른 애를 출력
    console.log("currenttarget: ", event.currentTarget);
    //이벤트가 걸려있는 객체를 출력
  };

  return (
    <>
      <button onClick={clickTest}>버튼</button>
    </>
  );
}
