import Trash from "../assets/trash.png";
import Pencil from "../assets/pencil.png";
import type { TodoItemProps } from "../types/todo";
import { useState } from "react";

type Props = TodoItemProps & {
    onToggle: () => void;
    onDelete: () => void;
    onEdit: (newTitle: string) => void;
};

const TodoItem = ({ title, isDone, onToggle, onDelete, onEdit }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(title);

    const handleSave = () => {
        if (editValue.trim()) {
            onEdit(editValue);
        }
        setIsEditing(false);
    };

    return (
        <div className="flex items-center 
        justify-between 
        border border-gray-300 
        rounded-xl 
        px-4 py-4 mb-4
        hover:scale-[1.02]
        transition-transform duration-200
        hover:shadow-lg
        hover:bg-gradient-to-b hover:from-[#F0F9FF] hover:to-[#EDE9FE]
        ">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={onToggle}
                    className="h-4 w-4 accent-[#7A83DE]"
                />
                {isEditing ? (
                    <input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        className="focus:outline-none"
                        autoFocus
                    />
                ) : (
                    <span className={isDone ? "line-through text-gray-400" : "text-gray-700"}>
                        {title}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-6">
                {isEditing && (
                    <button
                        className="flex items-center 
                        gap-1 
                        bg-[#7A83DE]/30
                        text-gray-700 
                        text-xs px-2 py-1 
                        rounded-md 
                        hover:bg-[#7A83DE]/50
                        transition
                        border border-gray-300 
                        shadow-sm"
                        onClick={handleSave}
                    >
                        <span className="flex items-center">✓</span> 완료
                    </button>
                )}
                <button
                    className="h-4 w-4"
                    onClick={() => setIsEditing((prev) => !prev)}
                >
                    <img src={Pencil} alt="Edit" />
                </button>
                <button className="h-4 w-4" onClick={onDelete}>
                    <img src={Trash} alt="Delete" />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
