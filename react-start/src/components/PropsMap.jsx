import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
  // const dataArr = [
  //   { name: "peach", krPrice: 10000, count: 5 },
  //   { name: "strawberry", krPrice: 14000, count: 1 },
  //   { name: "pear", krPrice: 5000, count: 6 },
  //   { name: "apple", krPrice: 10000, count: 10 },
  // ];

  //map 사용예시
  // const numArr = [10, 20, 30, 40, 50];
  // const newARR = numArr.map((data) => {
  //   return data * 2;
  // });
  // console.log(newARR);

  return (
    <>
      <h4>가격표</h4>
      {/* name, number, krPrice */}
      {/* 비효율적 - map 사용 X */}
      {/* <FunctionProps
        name={arr[0].name}
        krPrice={arr[0].krPrice}
        number={arr[0].count}
      />
      <FunctionProps
        name={arr[1].name}
        krPrice={arr[1].krPrice}
        number={arr[1].count}
      />
      <FunctionProps
        name={arr[2].name}
        krPrice={arr[2].krPrice}
        number={arr[2].count}
      />
      <FunctionProps
        name={arr[3].name}
        krPrice={arr[3].krPrice}
        number={arr[3].count}
      /> */}

      {/* map사용 - 간편*/}
      {arr.map((data, index) => {
        return (
          <FunctionProps
            name={data.name}
            krPrice={data.krPrice}
            number={data.count}
            key={index}
          />
        );
      })}
    </>
  );
}
