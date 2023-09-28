import "../styles/todoBox.scss";

export default function TodoBox(props) {
  const { title, date, content } = props;
  return (
    <>
      <div className="todoBox">
        <div className="todoContent">
          <div className="todoTitle">{title}</div>
          <div className="todoDate">{date}</div>
          <div className="todoMemo">{content}</div>
        </div>
      </div>
    </>
  );
}
