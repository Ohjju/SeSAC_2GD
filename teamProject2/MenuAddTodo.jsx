import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddTodo.scss";

export default function MenuAddTodo() {
  return (
    <div className="sideContainer">
      <div className="sideTodo">
        <div style={{ display: "flex" }}>
          <div className="todoCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="todoName">디자인 틀 완성하기</div>
        </div>
        <div className="todoStar">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="sideTodo">
        <div style={{ display: "flex" }}>
          <div className="todoCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="todoName">ppt 만들기</div>
        </div>
        <div className="todoStar important">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  );
}
