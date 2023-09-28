import "../styles/todoBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function TodoBox(props) {
  const { title, date, content, statecolor, boxcolor } = props;
  return (
    <>
      <div className="todoBox">
        <div
          className="todoColor"
          style={{ backgroundColor: `var(${boxcolor})` }}
        ></div>
        <div className="todoContent">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "1.6rem",
            }}
          >
            <div
              className="state"
              style={{ backgroundColor: `var(${statecolor})` }}
            ></div>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              style={{ color: "d9d9d9", fontSize: "2.5rem" }}
            />
          </div>

          <div className="todoTitle">{title}</div>
          <div className="todoDate">{date}</div>
          <div className="todoMemo">{content}</div>
        </div>
      </div>
    </>
  );
}
