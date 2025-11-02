import { useState } from "react";
import { type Category, CATEGORIES } from "../types/todo"; // 타입인지 값인지 구분해줘야 한다!!

type EditorProps = {
  onCreate: (content: string, category: Category) => void;
};

const Editor = ({ onCreate }: EditorProps) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);  //이 부분이 조금 어렵다..

  const onSubmit = () => {
    if (content.trim() === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    onCreate(content, category);
    setContent("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <div className="flex gap-2">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
        className="
          p-4 border rounded focus:outline-none focus:border-blue-400 w-24
          bg-white text-gray-800 border-gray-300
          dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
        "
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        placeholder="새로운 ToDo..."
        className="
          flex-1 p-4 border rounded focus:outline-none focus:border-blue-400
          bg-white text-gray-800 border-gray-300
          dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
        "
      />
      <button
        onClick={onSubmit}
        className="w-20 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition dark:bg-blue-400 dark:hover:bg-blue-500"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
