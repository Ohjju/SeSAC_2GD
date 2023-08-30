function Select(props) {
  const { setFruit, setBackground, setColor } = props;
  // const setData = props.setData
  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          // setData((data)=> { return {... data, fruit: e.currentTarget.value}})
          // ... => 전개연산자
          // data는 이전 state를 의미
          //따라서 사과-> 바나나로 바뀌면  data={fruit: 'apple'}임
          //{...data}는 data안에 있는 키, 값들을 다 풀어서 쓰는 것 ={fruit:'apple', backgriund:"black" ~}
          // 이에 값이 새로운 값으로 덮어씌어질때 fruit만 바나나로 바뀌게 됨
          // 그런데 비동기를 동기로 바꿔서 하는건 좋은 방법이 아님.. 원래의 흐름을 일부러 깨는 것이기 떄문에
          //select에 보낼 때 const data= props.data 이렇게 이전 상태도 같이 보내놓는게 더 좋은 방법임
          console.log(e.target.value);
          setFruit(e.target.value);
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setBackground(e.target.value);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
