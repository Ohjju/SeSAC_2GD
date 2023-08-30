function Input(props) {
  // const { setContent } = props;
  const setContent = props.setContent;
  // const setData= props.setData;
  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
