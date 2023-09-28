import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";

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
              <div className="todo"></div>
              <div className="doing"></div>
              <div className="done"></div>
            </div>
            <div className="todoGroupBox">
              <div className="todo">
                <TodoBox
                  title="디자인 틀 완성하기"
                  date="09.28 ~ 10.20"
                  content="내용내요내용내용내요내요"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 10.20"
                  content="content"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                />
              </div>
              <div className="doing">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                />
              </div>
              <div className="done">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
