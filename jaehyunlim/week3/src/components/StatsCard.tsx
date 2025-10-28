import { List, CheckCircle2, Clock } from 'lucide-react';

interface StatsCardProps {
  title: string;
  count: number;
  icon: 'all' | 'completed' | 'remaining';
}

const iconMap = {
  all: List,
  completed: CheckCircle2,
  remaining: Clock,
};

const colorMap = {
  all: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  completed: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  remaining: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
};

export default function StatsCard({ title, count, icon }: StatsCardProps) {
  const IconComponent = iconMap[icon];
  
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 sm:p-6 flex items-center justify-between border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform hover:scale-105 group cursor-pointer">
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110 transform">{count}</p>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[icon]} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
        <IconComponent size={24} />
      </div>
    </div>
  );
}

