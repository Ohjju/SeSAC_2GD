import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddImportant.scss";

export default function MenuAddImportant() {
  return (
    <div className="sideContainer">
      <div className="sideImportant">
        <div style={{ display: "flex" }}>
          <div
            className="importantCheckbox"
            style={{ color: `var(--status-green)` }}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="importantName">ppt 만들기</div>
        </div>
      </div>

      <div className="sideImportant">
        <div style={{ display: "flex" }}>
          <div
            className="importantCheckbox"
            style={{ color: `var(--status-yellow)` }}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="importantName">코드 완성하기</div>
        </div>
      </div>
    </div>
  );
}
