import Trash from "../assets/trash.png"
import Pencil from "../assets/pencil.png"
import type { TodoItemProps } from "../types/todo";


const TodoItem = ({ title, isDone }: TodoItemProps) => {
    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-4 mb-4">
            <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#7A83DE]" />
                <span className="text-gray-700">{title}</span>
            </div>
            <div className="flex items-center gap-6">
                <button className="h-4 w-4">
                    <img src={Pencil} alt="Edit" />
                </button>
                <button className="h-4 w-4">
                    <img src={Trash} alt="Delete" />
                </button>
            </div>
        </div>
    )
}


export default TodoItem;