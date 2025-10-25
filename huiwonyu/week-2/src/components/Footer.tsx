import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import type { TodoItemProps } from "../types/todo";
import { useLocation } from "react-router-dom";

type Props = {
  todos: TodoItemProps[];
};

const Footer = ({ todos }: Props) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const location = useLocation();

  const remaining = todos.filter((t) => !t.isDone).length;
  const completed = todos.filter((t) => t.isDone).length;

  const handleClear = () => {
    if (location.pathname === "/done") {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const incomplete = todos.filter((t) => !t.isDone);
      localStorage.setItem("todos", JSON.stringify(incomplete));
    }
    window.location.reload();
  };

  const handleToggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-600 my-8 pt-8">
      {/* 문구: 경로에 따라 다르게 표시 */}
      <span className="text-gray-700 dark:text-gray-200 ml-3">
        {location.pathname === "/done"
          ? `총 ${completed}개의 할 일을 완료하였습니다!`
          : `할 일이 ${remaining}개 남았습니다!`}
      </span>

      {/* 오른쪽 버튼들 */}
      <div className="flex items-center gap-2">
        {/* 삭제 버튼: 조건부로 텍스트 변경 */}
        <button
          onClick={handleClear}
          className="text-black/60 dark:text-gray-100 px-3 py-1 rounded-md 
                     hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {location.pathname === "/done" ? "전체 삭제" : "완료 목록 삭제"}
        </button>

        {/* 다크모드 토글 */}
        <button
          onClick={handleToggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full 
                     border border-gray-400 dark:border-gray-500
                     bg-gray-200 dark:bg-gray-800
                     text-gray-800 dark:text-yellow-300
                     hover:scale-110 transition-transform duration-200 mr-3"
          title="테마 전환"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Footer;
