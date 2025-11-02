import { useNavigate } from 'react-router-dom';
import { Calendar, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = days[today.getDay()];

  const handleShowCompleted = () => {
    navigate('/done');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm mb-6 rounded-lg p-4 sm:p-6 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <Calendar className="text-purple-600 dark:text-purple-400" size={24} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">오늘의 할일</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{year}년 {month}월 {date}일 {dayName}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleShowCompleted}
            className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transform hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center gap-2 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="relative z-10">완료됨</span>
          </button>
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
    </header>
  );
}

