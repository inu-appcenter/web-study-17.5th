import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
};

type ListProps = {
  todos: Todo[];
  onUpdate: (targetId: number) => void; //props로 타입
  onDelete: (targetId: number) => void;
};

const List = ({ todos, onUpdate, onDelete }: ListProps) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    //연산이 참이 되는 것을 식별, 대소문자 구분 없애기 -> 모두 소문자로 인식
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4> Todo List 🌿</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ); //list 렌더링할때 key로 컴포넌트 구별
        })}
      </div>
    </div>
  );
};

export default List;
