import Count from "../Count";
import EventObj from "../EventObj";
import { PropsType1, PropsType2, PropsType3 } from "../PropsType";
import SetText from "../SetText";
import HeaderMenu from "./HeaderMenu";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <h1>lecture page</h1>
      <PropsType1 name="juhyun" />
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      />
      <PropsType3 width={200} height={200} color="yellow" text="안녕하세요" />
      <Count />
      <SetText />
      <EventObj />
    </>
  );
}
