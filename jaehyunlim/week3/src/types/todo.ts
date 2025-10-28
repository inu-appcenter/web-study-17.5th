export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: 'all' | 'personal' | 'work' | 'shopping' | 'health';
  date: 'today' | 'tomorrow' | 'completed' | string;
}

export type Category = 'all' | 'personal' | 'work' | 'shopping' | 'health';
export type FilterStatus = 'all' | 'in-progress' | 'completed';

