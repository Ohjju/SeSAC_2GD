import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import styled from "styled-components";

export const Student = () => {
  // 페이지에 대한 데이터
  const boardData = [
    {
      id: 1,
      name: "sean",
    },
    {
      id: 2,
      name: "codingon",
    },
    { id: 3, name: "new" },
  ];

  // 스타일 지정
  const Div = styled.div`
    background-color: beige;
  `;
  const spanStyle = {
    color: "green",
    fontWeight: "700",
  };

  // "/student/:studentName"에서 studentName이랑(param.studentName) boardDate의 name 비교!
  const param = useParams();
  const board = boardData.filter((el) => el.name === param.studentName)[0];

  // URL의 쿼리 데이터 사용
  // url에서 ?뒤에 있는 것들이 쿼리
  // "/student/new?name=jisoo" 여기서는 name=jisoo
  const [nameParams] = useSearchParams();
  const queryName = nameParams.get("name");

  const navigate = useNavigate();

  return board ? (
    <Div>
      <p>
        학생의 이름은 <span style={spanStyle}>{board.name}</span>입니다.
      </p>

      {/* queryName 있으면 보여주고 없으면 안 보여줌 */}
      {/* "/student/new?name=jisoo" 여기서 name이 jisoo이므로 '쿼리이용' 눌렀을 때는 아래의 코드가 실행됨 */}
      {queryName && (
        <p>
          실제 학생의 이름은
          <span style={{ color: "red", fontWeight: "700" }}>{queryName}</span>
          입니다.
        </p>
      )}

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전페이지로
      </button>
    </Div>
  ) : (
    <NotFound></NotFound>
  );
};
