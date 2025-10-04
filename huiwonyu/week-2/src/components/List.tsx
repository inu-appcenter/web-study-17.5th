import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import type { TodoItemProps } from "../types/todo";

const List = () => {
    const [todoItems, setTodoItems] = useState<TodoItemProps[]>([]);

    // 처음 마운트될 때 localStorage에서 불러오기
    useEffect(() => {
        const oldItems = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodoItems(oldItems);
    }, [todoItems]);

    // 삭제
    const handleDelete = (index: number) => {
        const newItems = todoItems.filter((_, i) => i !== index);
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
    };

    // 수정
    const handleEdit = (index: number, newTitle: string) => {
        const newItems = [...todoItems];
        newItems[index].title = newTitle;
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
    };

    // 체크박스
    const handleToggle = (index: number) => {
        const newItems = [...todoItems];
        newItems[index].isDone = !newItems[index].isDone;
        setTodoItems(newItems);
        localStorage.setItem("todos", JSON.stringify(newItems));
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
