const API_BASE = 'http://localhost:5000/api/todos'; 

export const fetchTodos = () =>
  fetch(API_BASE).then(res => res.json());

export const createTodo = (title: string) =>
  fetch(`${API_BASE}/todos`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  }).then(res => res.json());

export const updateTodo = (id: number, completed?: boolean, title?: string) =>
  fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed, title }),
  }).then(res => res.json());


export const deleteTodo = (id: number) =>
  fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
