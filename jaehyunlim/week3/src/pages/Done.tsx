import { useNavigate } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';
import { useTheme } from '../context/ThemeContext';
import TodoItem from '../components/TodoItem';
import { ArrowLeft, Moon, Sun } from 'lucide-react';

export default function Done() {
  const navigate = useNavigate();
  const { todos, toggleTodo, deleteTodo } = useTodos();
  const { isDark, toggleTheme } = useTheme();

  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-sm mb-6 rounded-lg p-4 sm:p-6 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-125 hover:rotate-12 active:scale-95"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">완료된 할일</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">완료된 할일 {completedTodos.length}개</p>
              </div>
            </div>
            <button 
              onClick={toggleTheme}
              className={`px-4 py-2 ${isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-700 hover:bg-gray-800'} text-white rounded-lg transform hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group`}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10 block transform group-hover:scale-110 transition-transform duration-300">
                {isDark ? <Sun size={20} className="animate-pulse" /> : <Moon size={20} />}
              </span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 transition-colors">
          <div className="space-y-3">
            {completedTodos.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                완료된 할일이 없습니다
              </div>
            ) : (
              completedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

