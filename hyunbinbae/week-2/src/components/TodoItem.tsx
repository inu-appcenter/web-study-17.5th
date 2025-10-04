import "./TodoItem.css";

type TodoItemProps = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}; //TS는 타입 선언이 필요??

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        checked={isDone}
        onChange={onChangeCheckbox}
        type="checkbox"
        readOnly
      />
      {/* <div className="content">{content}</div> */}
      <div className={`content ${isDone ? "done" : ""}`}>{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>delete</button>
    </div>
  );
};

export default TodoItem;
