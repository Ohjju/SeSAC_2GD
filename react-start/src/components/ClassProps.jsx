import { Component } from "react";

class ClassProps extends Component {
  //name, color, nickname
  render() {
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h2>hi, {this.props.name}</h2>
        <ul>
          <li>별명: {this.props.nickname}</li>
          <li>좋아하는 색: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps2 extends Component {
  render() {
    const { name, bgColor, nickname, fontColor } = this.props;
    return (
      <div style={{ backgroundColor: bgColor, color: fontColor }}>
        <h2>hi, {name}</h2>
        <ul>
          <li>별명: {nickname}</li>
          <li>좋아하는 색: {fontColor}</li>
        </ul>
      </div>
    );
  }

  //   class 안에서도 defaultprops 값 지정할 수 있음
  //   static defaultProps={
  //     fontColor: "beige",
  //   }
}

ClassProps2.defaultProps = {
  fontColor: "beige",
};

export { ClassProps, ClassProps2 };
