import { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types/todo';
import { INITIAL_TODOS } from '../constants/todos';

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, category: Todo['category']) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const addTodo = (text: string, category: Todo['category']) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      category,
      date: 'today',
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed, date: !todo.completed ? 'completed' : 'today' }
        : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}

