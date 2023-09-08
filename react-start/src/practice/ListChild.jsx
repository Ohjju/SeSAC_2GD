export default function ListChild(props) {
  const { todo, todoText } = props;
  return (
    <div>
      <h2>{todo}</h2>
      <p>{todoText}</p>
      <hr />
    </div>
  );
}
