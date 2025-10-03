import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import type { TodoItemProps } from "../types/todo";

const List = () => {
    const [todoItems, setTodoItems] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        const oldItems = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodoItems(oldItems);
    }, [todoItems]);

    return (
        <div>
            {todoItems.map((item) => (
                <TodoItem title={item.title} isDone={item.isDone} />
            ))}
        </div>
    );
};

export default List;