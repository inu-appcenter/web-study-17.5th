import { Category } from '../types/todo';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'personal', label: '개인' },
  { value: 'work', label: '업무' },
  { value: 'shopping', label: '쇼핑' },
  { value: 'health', label: '건강' },
];

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-lg ${
            selectedCategory === category.value
              ? 'bg-blue-600 dark:bg-blue-700 text-white animate-pulse-glow'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

