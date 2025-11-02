import { useState } from "react";
import type { TodoItemProps } from "../types/todo";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
};

const Editor = ({ setTodos }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddButton = () => {
    const title = inputValue.trim();
    if (!title) return alert("할 일을 입력하세요!");

    const newTodo = { title, isDone: false };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  return (
    <div className="flex items-center gap-2 border-b border-gray-200 py-2 mb-8">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="할 일을 입력하세요"
        className="flex-1 rounded-md px-4 py-4 text-gray-700 
                            border border-transparent
                            hover:border-[#7A83DE] focus:border-[#7A83DE]
                            focus:ring-2 focus:ring-[#7A83DE] 
                            focus:outline-none
                            transform hover:scale-[1.02] focus:scale-[1.02]
                            transition-all duration-200"
      />
      <button
        className="bg-[#7A83DE]/80
                text-white 
                rounded-xl 
                px-4 py-2 
             transform hover:scale-105 
             transition-transform duration-200"
        onClick={handleAddButton}>
        + 추가
      </button>
    </div>
  );
};

export default Editor;
