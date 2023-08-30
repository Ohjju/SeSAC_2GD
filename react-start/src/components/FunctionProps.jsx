// props ={
//     name : '',
//     KrPrice: number,
//     number: number
// }

//   1. props. 으로 접근
// return (
//   <div>
//     <h5>{props.name}</h5>
//     <p>
//       {props.number}개에 {props.krPrice}원 (${props.krPrice / 1000})
//     </p>
//     <hr />
//   </div>
// );

//  2. props 객체로 받고 구조분해할당 이용
//  const { name, krPrice, number } = props;

//  3. props 매개변수로 받는 것이 아닌 바로 받는 방법
// function FunctionProps ({name, number, krPrice}){}
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에 {krPrice}원 (${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );

//4. children과 defaultProps 사용 (값이 들어오지 않았을 떄 default값 사용)
function FunctionProps(props) {
  const { name, krPrice, number, children } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원 (${krPrice / 1000})
      </p>
      <p>{children}</p>
      {/* react에서 제공하는 것으로 글씨 또는 요소?들을 넘길 수 있음! */}
      <hr />
    </div>
  );
}
// function 끝나고 default 값 object 형태로 저장
FunctionProps.defaultProps = {
  name: "fruit",
  krPrice: 10000,
  number: 5,
};

export default FunctionProps;
