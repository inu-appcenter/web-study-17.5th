import { Todo } from '../types/todo';
import { Trash2, Edit2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const getCategoryName = (category: Todo['category']): string => {
  switch (category) {
    case 'personal':
      return '개인';
    case 'work':
      return '업무';
    case 'shopping':
      return '쇼핑';
    case 'health':
      return '건강';
    default:
      return '';
  }
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 group animate-scale-in">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-6 h-6 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer transform hover:scale-125 transition-all duration-300 relative"
      />
      <div className="flex-1">
        <p className={`text-gray-900 dark:text-white ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
          {todo.text}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-xs px-2 py-1 rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-3 group-hover:shadow-lg ${
            todo.category === 'personal' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800' :
            todo.category === 'work' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 group-hover:bg-purple-200 dark:group-hover:bg-purple-800' :
            todo.category === 'shopping' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 group-hover:bg-green-200 dark:group-hover:bg-green-800' :
            'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 group-hover:bg-orange-200 dark:group-hover:bg-orange-800'
          }`}>
            <span className="inline-block">{getCategoryName(todo.category)}</span>
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {todo.date === 'today' ? '오늘' : todo.date === 'tomorrow' ? '내일' : todo.completed ? '완료' : todo.date}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-125 hover:-translate-y-1 active:scale-95 transition-all duration-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 group">
          <Edit2 size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        </button>
        <button onClick={() => onDelete(todo.id)} className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transform hover:scale-125 hover:-translate-y-1 active:scale-95 transition-all duration-300 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 group animate-shake">
          <Trash2 size={18} className="group-hover:rotate-12 group-hover:shake transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

