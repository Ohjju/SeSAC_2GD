import ChangeObj from "./ChangeObj";

const pororo = [
  {
    name: "뽀로로",
    age: "7",
    nickName: "사고뭉치",
  },
  {
    name: "루피",
    age: "5",
    nickName: "공주님",
  },
  {
    name: "크롱",
    age: "4",
    nickName: "장난꾸러기",
  },
];

export default function PororoObj() {
  return (
    <div>
      <ChangeObj objArr={pororo} />
    </div>
  );
}
