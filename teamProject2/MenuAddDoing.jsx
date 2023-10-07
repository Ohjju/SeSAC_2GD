import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddDoing.scss";

export default function MenuAddDoing() {
  return (
    <div className="sideContainer">
      <div className="sideDoing">
        <div style={{ display: "flex" }}>
          <div className="doingCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="doingName">디자인 틀 완성하기</div>
        </div>
        <div className="doingStar">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="sideDoing">
        <div style={{ display: "flex" }}>
          <div className="doingCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="doingName">코드 완성하기</div>
        </div>
        <div className="doingStar important">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  );
}
