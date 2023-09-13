import DoneList from "./DoneList";
import TodoList from "./TodoList";
import "../styles/style.scss";

export default function ListContainer() {
  return (
    <>
      <div class="container">
        <div class="todo">
          <TodoList />
        </div>
        <div class="done">
          <DoneList />
        </div>
      </div>
    </>
  );
}
