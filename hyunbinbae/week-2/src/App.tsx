import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import DoneTodo from "./pages/DoneTodo"; // DoneTodo import 추가
import { useState, useEffect } from "react";
import { DarkModeProvider } from "./contexts/ThemeContext";
import { type Category, type Todo } from "./types/todo";

const LOCAL_STORAGE_KEY = "todos"; //로컬 스토리지 키

// 로컬 스토리지에서 데이터 불러오기
const getLocalStorageData = (): Todo[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(getLocalStorageData);

  const [currentPage, setCurrentPage] = useState<"home" | "done">("home"); //

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //할 일 개수 표현 위해서 count 할 함수 만들기
  const todoCount = todos.filter((todo) => !todo.isDone).length;

  const onCreate = (content: string, category: Category) => {
    const newTodo: Todo = {
      id: Date.now(), // 고유 ID로 현재시간 -> 시간이랑 상수 뭐가 좋을까...
      isDone: false,
      content,
      date: new Date().getTime(),
      category,
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const pages = {
    home: (
      <>
        <Editor onCreate={onCreate} />
        <List
          todos={todos}
          onUpdate={onUpdate}
          onDelete={onDelete}
          todoCount={todoCount}
        />
      </>
    ),
    done: <DoneTodo todos={todos} onUpdate={onUpdate} onDelete={onDelete} />,
  };

  return (
    <DarkModeProvider>
      <div
        className="
          w-[500px] mt-[70px] mx-auto flex flex-col gap-3 p-6 rounded-xl shadow-2xl transition-colors duration-300
          bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100
        "
      >
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        {pages[currentPage]}
        {/* 현재 페이지 불러오기 {pages[currentPage]} 맞나요..? 삼항 연산자에서 페이지 추가 생각해서 매핑으로 바꿈*/}
      </div>
    </DarkModeProvider>
  );
}

export default App;
