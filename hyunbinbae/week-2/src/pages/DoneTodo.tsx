import TodoItem from "../components/TodoItem";
import { type Todo } from "../types/todo";

type DoneTodoProps = {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
};

const DoneTodo = ({ todos, onUpdate, onDelete }: DoneTodoProps) => {
  // 완료된 항목만 필터
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="flex flex-col gap-4">
      {" "}
      <h4 className="text-xl font-bold text-blue-500 dark:text-blue-400 mb-2">
        완료된 할 일 {doneTodos.length}개 🎉{" "}
      </h4>{" "}
      {doneTodos.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-5 p-4 border rounded-lg border-dashed dark:border-gray-600">
          아직 완료된 할 일이 없어요.
        </p>
      )}{" "}
      <div className="flex flex-col gap-5">
        {" "}
        {doneTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default DoneTodo;
