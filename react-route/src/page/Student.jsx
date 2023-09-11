import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import styled from "styled-components";

export const Student = () => {
  const param = useParams();

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

  const Div = styled.div`
    background-color: beige;
  `;
  const spanStyle = {
    color: "green",
    fontWeight: "700",
  };

  const [nameParams] = useSearchParams();
  const queryName = nameParams.get("name");
  const board = boardData.filter((el) => el.name === param.studentName)[0];

  const navigate = useNavigate();

  return board ? (
    <Div>
      <p>
        학생의 이름은 <span style={spanStyle}>{board.name}</span>입니다.
      </p>

      {/* queryNAme 있으면 보여주고 없으면 안 보여줌 */}
      {queryName && (
        <p>
          실제 학생의 이름은{" "}
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
