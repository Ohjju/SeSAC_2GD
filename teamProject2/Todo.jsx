import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// 할 일
export default function Todo() {
  return (
    <>
      <header className="header"></header>
      <div className="todoContainer">
        <div className="left">
          <div className="miniCalendar"></div>
          <div className="whiteBox"></div>
        </div>
        <div className="right">
          <div className="todoGroup">
            <div className="todoGroupingBox">
              <div className="todo">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">해야할 일</div>
                  <div className="count">5</div>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                />
              </div>

              <div className="doing">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">진행 중</div>
                  <div className="count">5</div>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                />
              </div>
              <div className="done">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">완료</div>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                />
              </div>
            </div>
            <div className="todoGroupBox">
              <div className="todo">
                <TodoBox
                  title="디자인 틀 완성하기"
                  date="09.28 ~ 10.20"
                  content="내용내요내용내용내요내요"
                  boxcolor="--select-pink"
                  statecolor="--status-green"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 10.20"
                  content="content"
                  boxcolor="--select-gray"
                  statecolor="--status-green"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-green"
                  statecolor="--status-green"
                />
              </div>
              <div className="doing">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-orange"
                  statecolor="--status-yellow"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-purple"
                  statecolor="--status-yellow"
                />
              </div>
              <div className="done">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-brown"
                  statecolor="--status-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
