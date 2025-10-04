import { useState, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "영어공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "스킨케어하기",
    date: new Date().getTime(),
  },
];

type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number; // getTime() 결과는 number
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); //JS와 달리 타입지정해야된다!
  const idRef = useRef(3); //id 중복되지 않도록 지정하기

  const onCreate = (content: string) => {
    const newTodo: Todo = {
      id: idRef.current++, //idRef 만들때마다 1씩 증가!
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  // const onUpdate = (targetId: number) => {
  //   //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === targetId) {
  //         return { ...todo, isDone: !todo.isDone };
  //       }
  //       return todo;
  //     })
  //   );
  // };

  const onUpdate = (targetId: number) => {
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
