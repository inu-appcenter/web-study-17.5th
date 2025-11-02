import { type Category } from "../types/todo";

type TodoItemProps = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
  category: Category;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  category,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  return (
    // 경계선 색상 다크모드에 맞게..
    <div className="flex items-center gap-5 py-3 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onUpdate(id)}
        // 체크박스 색상
        className="w-5 accent-blue-500 dark:accent-blue-400"
      />

      <span
        className={`
          text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap
        `}
      >
        {category}
      </span>

      {/* 텍스트 색상 다크*/}
      <div
        className={`flex-1 text-base transition-colors ${
          isDone
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-gray-800 dark:text-gray-100"
        }`}
      >
        {content}
      </div>
      {/* 날짜 텍스트 색상 다크*/}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(date).toLocaleDateString()}
      </div>
      <button
        onClick={() => onDelete(id)}
        // 버튼 스타일을 다크
        className="
          cursor-pointer bg-transparent text-gray-500 text-sm rounded px-2 py-1 transition
          hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700
        "
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
