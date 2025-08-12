// components/optimistic-todo.tsx
'use client';
import { useOptimistic, startTransition } from 'react';
import { addTodo } from '@/actions/todos';

export function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useOptimistic(initialTodos, 
    (state, newTodo: Todo) => [...state, newTodo]
  );

  return (
    <form action={async (formData) => {
      const todo = { id: Date.now(), text: formData.get('text'), completed: false };
      startTransition(() => setTodos(todo));
      await addTodo(formData);
    }}>
      <input name="text" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}