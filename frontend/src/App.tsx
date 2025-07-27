import { useEffect, useState } from 'react';
import { Todo } from './types';

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './services/api';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (!title) return;
    const newTodo = await createTodo(title);
    setTodos([...todos, newTodo]);
    setTitle('');
  };

  const handleToggle = async (id: number, completed: boolean) => {
    const updated = await updateTodo(id, completed);
    setTodos(todos.map(t => (t.id === id ? updated : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

const handleEdit = async (id: number, newTitle: string) => {
  const updated = await updateTodo(id, undefined, newTitle);
  setTodos(todos.map(t => (t.id === id ? updated : t)));
};


  return (
    <div className="max-w-md mx-auto mt-10 ">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-grow"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
              onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}
