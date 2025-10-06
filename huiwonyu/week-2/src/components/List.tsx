import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import type { TodoItemProps } from "../types/todo";

const List = () => {
    const [todoItems, setTodoItems] = useState<TodoItemProps[]>([]);

    const loadTodos = () => {
        const oldItems = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodoItems(oldItems);
    };

    useEffect(() => {
        loadTodos();

        window.addEventListener("storage", loadTodos);

        return () => {
            window.removeEventListener("storage", loadTodos);
        };
    }, [todoItems]);

    // 삭제
    const handleDelete = (index: number) => {
        const newItems = todoItems.filter((_, i) => i !== index);
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
        loadTodos();
    };

    // 수정
    const handleEdit = (index: number, newTitle: string) => {
        const newItems = [...todoItems];
        newItems[index].title = newTitle;
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
        loadTodos();
    };

    // 체크박스 토글
    const handleToggle = (index: number) => {
        const newItems = [...todoItems];
        newItems[index].isDone = !newItems[index].isDone;
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
        loadTodos();
    };

    return (
        <div>
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index}
                    title={item.title}
                    isDone={item.isDone}
                    onDelete={() => handleDelete(index)}
                    onEdit={(newTitle) => handleEdit(index, newTitle)}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default List;
