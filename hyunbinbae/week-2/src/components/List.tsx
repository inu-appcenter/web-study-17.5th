import TodoItem from "./TodoItem";
import { useState } from "react";
import { type Todo } from "../types/todo";

type ListProps = {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
  todoCount: number;
};

const List = ({ todos, onUpdate, onDelete, todoCount }: ListProps) => {
  const [search, setSearch] = useState("");

  const filteredTodos =
    search === ""
      ? todos
      : todos.filter((todo) =>
          todo.content.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold">Todo List 🌿</h4>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="w-full border-none border-b border-white bg-transparent py-4 focus:outline-none focus:border-skyblue transition"
      />
      <div className="flex flex-col gap-5">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className="mt-4 p-3 bg-beige text-brown-500 rounded test-center font-medium">
        남은 할일: <span className="text-skyblue font-bold">{todoCount}</span>
      </div>
    </div>
  );
};

export default List;
