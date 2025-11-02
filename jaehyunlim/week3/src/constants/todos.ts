import { Todo } from '../types/todo';

export const INITIAL_TODOS: Todo[] = [
  {
    id: '1',
    text: '프로젝트 문서 작성하기',
    completed: false,
    category: 'work',
    date: 'today',
  },
  {
    id: '2',
    text: '운동하기',
    completed: true,
    category: 'health',
    date: 'completed',
  },
  {
    id: '3',
    text: '장보기 - 우유, 빵, 계란',
    completed: false,
    category: 'shopping',
    date: 'today',
  },
];

