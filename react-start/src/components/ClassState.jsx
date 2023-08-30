import { Component } from "react";

class ClassState extends Component {
  // 예전 방식
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       banana: "바나나",
  //       //변수이름(키): 초기화할 값
  //     };
  //   }

  //요즘 방식
  //   state = {
  //     banana: "바나나",
  //   };

  render() {
    return (
      <div>
        {/* <div>{this.state.banana}</div> */}
        {/* <div>{banana}</div> */}
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변경(clss형)
        </button>
      </div>
    );
  }
}

export default ClassState;
