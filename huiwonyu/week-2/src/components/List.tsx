
// import TodoItem from "./TodoItem";
// import type { TodoItemProps } from "../types/todo";

// type Props = {
//   todos: TodoItemProps[];
//   setTodos: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
// };

// const List = ({ todos, setTodos }: Props) => {
//   const handleDelete = (index: number) => {
//     setTodos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index: number, newTitle: string) => {
//     setTodos((prev) => {
//       const copy = [...prev];
//       copy[index].title = newTitle;
//       return copy;
//     });
//   };

//   const handleToggle = (index: number) => {
//     setTodos((prev) => {
//       const updated = [...prev];
//       updated[index].isDone = !updated[index].isDone;
//       updated.sort((a, b) => (b.isDone ? 1 : 0) - (a.isDone ? 1 : 0));
//       return updated;
//     });
//   };

//   return (
//     <div>
//       {todos.map((item, index) => (
//         <TodoItem
//           key={index}
//           title={item.title}
//           isDone={item.isDone}
//           onDelete={() => handleDelete(index)}
//           onEdit={(newTitle) => handleEdit(index, newTitle)}
//           onToggle={() => handleToggle(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default List;
import TodoItem from "./TodoItem";
import type { TodoItemProps } from "../types/todo";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

type Props = {
  todos: TodoItemProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
};

const List = ({ todos, setTodos }: Props) => {
  const handleDelete = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number, newTitle: string) => {
    setTodos((prev) => {
      const copy = [...prev];
      copy[index].title = newTitle;
      return copy;
    });
  };

  const handleToggle = (index: number) => {
    setTodos((prev) => {
      const updated = [...prev];
      updated[index].isDone = !updated[index].isDone;
      updated.sort((a, b) => (b.isDone ? 1 : 0) - (a.isDone ? 1 : 0));
      return updated;
    });
  };

  // ✅ 드래그 완료 시 순서 변경 처리
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // 드롭 안 됐으면 무시

    const updated = Array.from(todos);
    const [movedItem] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, movedItem);
    setTodos(updated);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 transition-all duration-300"
          >
            {todos.map((item, index) => (
              <Draggable
                key={item.title + index}
                draggableId={item.title + index}
                index={index}
                isDragDisabled={item.isDone}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...(!item.isDone ? provided.dragHandleProps : {})}
                    className={`transition-all duration-500 ease-in-out transform hover:scale-[1.01]
                      ${item.isDone ? "opacity-70 cursor-default" : ""}`}
                  >
                    <TodoItem
                      title={item.title}
                      isDone={item.isDone}
                      onDelete={() => handleDelete(index)}
                      onEdit={(newTitle) => handleEdit(index, newTitle)}
                      onToggle={() => handleToggle(index)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
