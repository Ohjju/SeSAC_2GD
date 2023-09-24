import { MatzipForm } from "../../utils/commonInterface";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px rgba(180, 180, 180, 0.4);
  border-radius: 10px;
  text-align: center;
  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (max-width: 720px) {
    width: 180px;
    height: 225px;
  }
`;

interface ImgProps {
  src: string;
}

const ImgDiv = styled.div<ImgProps>`
  width: 80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  background-image: url(${(props: ImgProps) => `${props.src}`});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 840px) {
    height: 140px;
  }

  @media screen and (max-width: 720px) {
    height: 100px;
  }
`;

const DescP = styled.p`
  font-size: 14px;
  margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default function Card({ imgSrc, title, desc }: MatzipForm) {
  return (
    <CardContainer>
      <ImgDiv src={imgSrc}></ImgDiv>
      <h3 style={{ textAlign: "center", marginTop: "12px" }}>{title}</h3>
      <DescP>{desc}</DescP>
    </CardContainer>
  );
}
