import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import StatsCard from '../components/StatsCard';
import TodoItem from '../components/TodoItem';
import { Category, FilterStatus } from '../types/todo';
import { Plus } from 'lucide-react';

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo, 'personal');
      setNewTodo('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    const categoryMatch = selectedCategory === 'all' || todo.category === selectedCategory;
    const statusMatch = 
      filterStatus === 'all' ? true :
      filterStatus === 'completed' ? todo.completed :
      !todo.completed;
    return categoryMatch && statusMatch;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    remaining: todos.filter(t => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 mb-6 transition-colors">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="새로운 할일을 입력하세요..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400 hover:shadow-md transform focus:scale-105"
            />
            <button
              onClick={handleAdd}
              className="px-6 py-3 bg-purple-600 dark:bg-purple-700 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium transform hover:scale-110 hover:rotate-3 active:scale-95 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <Plus size={20} className="relative z-10 group-hover:rotate-90 transition-transform duration-500" />
              <span className="hidden sm:inline relative z-10">추가</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatsCard title="전체 할일" count={stats.total} icon="all" />
          <StatsCard title="완료됨" count={stats.completed} icon="completed" />
          <StatsCard title="남은 할일" count={stats.remaining} icon="remaining" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-0">할일 목록</h2>
            <div className="flex gap-2">
              {(['all', 'in-progress', 'completed'] as FilterStatus[]).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-lg ${
                    filterStatus === status
                      ? 'bg-blue-600 dark:bg-blue-700 text-white animate-pulse-glow'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {status === 'all' ? '전체' : status === 'in-progress' ? '진행중' : '완료'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                할일이 없습니다
              </div>
            ) : (
              filteredTodos.map(todo => (
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

