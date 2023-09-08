import { useParams } from "react-router-dom";
import img1 from "../asset/pooh1.webp";
import img2 from "../asset/pooh2.jpg";
import { NotFound } from "./NotFound";

// export default function BoardDetail() {
//   const params = useParams();
//   //params= {boardID : '2'} 이런식으로 들어옴
//   const { boardID } = useParams();
//   // boardID 는 구조분해할당 이용한 것

//   return (
//     <>
//       <h2>{boardID}번 게시물입니다.</h2>
//       <h2>{params.boardID}번 게시물입니다</h2>
//     </>
//   );
//}

export default function BoardDetail() {
  const param = useParams();
  const boardData = [
    {
      id: 1,
      title: "1번 글",
      content: "1번 내용 ~",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "2번 글",
      content: "2번 내용 ~",
      imgSrc: img2,
    },
  ];

  // boardData의 요소인 오브젝트 id와 파라미터가 같은 것 리턴
  // filter : 조건에 맞는 요소를 출력
  const board = boardData.filter((el) => el.id === Number(param.boardID))[0];

  // 삼항연산자 사용 - board가 있으면(게시물에 대한 데이터) 게시글 return, 없으면 notfound
  return board ? (
    <>
      <h1>게시글 {param.boardID}번</h1>
      <img src={board.imgSrc} alt={`${param.boardID}번 이미지`} />
      <h3>{board.title}</h3>
      <p>{board.content}</p>
    </>
  ) : (
    <NotFound></NotFound>
  );
}
