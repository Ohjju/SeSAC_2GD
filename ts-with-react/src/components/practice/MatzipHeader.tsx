import styled from "styled-components";
import { SetStateAction } from "react";

const PHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

interface ColorProps {
  isTrue: boolean;
}

const Div = styled.div<ColorProps>`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props: ColorProps) => (props.isTrue ? "#ffbbbb" : "black")};
  &:hover {
    color: hotpink;
  }
`;

interface Props {
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
  mapo: boolean;
  gangdong: boolean;
  dobong: boolean;
}

export default function MatzipHeader(props: Props) {
  const { mapo, gangdong, dobong, setGangdong, setMapo, setDobong } = props;

  function setState(func: React.Dispatch<SetStateAction<boolean>>) {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    func(true);
  }

  return (
    <PHeader>
      <Div onClick={() => setState(setGangdong)} isTrue={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setMapo)} isTrue={mapo}>
        마포구
      </Div>
      <Div onClick={() => setState(setDobong)} isTrue={dobong}>
        도봉구
      </Div>
    </PHeader>
  );
}
