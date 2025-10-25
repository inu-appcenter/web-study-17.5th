import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Editor from "../components/Editor";
import Footer from "../components/Footer";
import type { TodoItemProps } from "../types/todo";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className={`p-4 mx-auto max-w-2xl 
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"} 
        border border-gray-300 rounded-xl my-12 shadow-lg transition-colors duration-300`}
    >
      <header className="mb-4">
        <Header />
      </header>

      <main>
        <Editor setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </main>

      <footer>
        <Footer todos={todos} />
      </footer>
    </div>
  );
}
