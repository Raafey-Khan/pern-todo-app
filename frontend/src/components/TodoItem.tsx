import { useEffect, useState } from 'react';
import { Todo } from '../types';

type Props = {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // we are syncing local state with updated todo title from parent
  useEffect(() => {
    setEditTitle(todo.title);
  }, [todo.title]);

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onEdit(todo.id, editTitle.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between mb-2 bg-gray-100 p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, !todo.completed)}
        />
        {isEditing ? (
          <input
            className="border p-1 rounded"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="text-green-500 hover:underline">Save</button>
            <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:underline">Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:underline">Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-500 hover:underline">Delete</button>
      </div>
    </li>
  );
}
