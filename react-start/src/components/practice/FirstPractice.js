function FirstPractice() {
  let helloStr = "Hello, first exercise";

  const divStyle = {
    marginTop: "32px",
    backgroundColor: "skyblue",
  };

  function click() {
    alert("클릭됨");
  }

  return (
    <div style={divStyle} onClick={click}>
      {helloStr}
    </div>
  );

  //   return (
  //     <div style={divStyle} onClick={()=>alert("클릭됨")}>
  //       {helloStr}
  //     </div>
  //   );
}

export default FirstPractice;
