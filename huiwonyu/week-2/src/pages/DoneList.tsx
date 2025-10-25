import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";
import type { TodoItemProps } from "../types/todo";

export default function DoneList() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]");
    const completed = saved.filter((t: TodoItemProps) => t.isDone);
    setTodos(completed);
  }, []);

  return (
    <div
      className={`p-4 mx-auto max-w-2xl 
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"} 
        border border-gray-300 rounded-xl my-12 shadow-lg transition-colors duration-300`}
    >
      <Header />

      {/* 돌아가기 버튼 */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/")}
          className="bg-[#7A83DE]/80 text-white px-3 py-1 rounded-lg text-sm hover:bg-[#6E76CC] transition"
        >
          ← 할 일 목록으로
        </button>
      </div>

      <main>
        {todos.length > 0 ? (
          <List todos={todos} setTodos={setTodos} />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-8">
            완료된 할 일이 없습니다!
          </p>
        )}
      </main>

      <footer>
        <Footer todos={todos} />
      </footer>
    </div>
  );
}
