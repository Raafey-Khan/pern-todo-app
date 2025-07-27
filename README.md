# 📍 PERN Todo App

A full-stack Todo application built with:

* **PostgreSQL** – for the database
* **Express.js** – backend API
* **React.js + Vite** – frontend UI
* **Node.js + TypeScript** – backend environment

---

## 🚀 Features

* Add, edit, delete todos
* Mark todos as complete/incomplete
* Responsive UI with simple user experience

---

## 📂 Folder Structure

```
pern-todo-app/
├── backend/
│   ├── src/
│   │   ├── controllers/      # API logic (CRUD)
│   │   ├── db/               # Database connection
│   │   ├── routes/           # Express routes
│   │   └── index.ts          # Server entry point
│   └── .env                  # Environment config
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── services/         # API calls
│   │   ├── types.ts          # Type definitions
│   │   └── App.tsx           # Main app UI
│   └── index.html
```

---

## 🛠️ Setup Instructions

### 1. Requirements

* Node.js (v18 or above)
* PostgreSQL installed

### 2. Database Setup

Create the database and table:

```sql
CREATE DATABASE tododb;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false
);
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
DATABASE_URL=postgresql://postgres:<your_password>@localhost:<your_port>/tododb
PORT=5000
```

Start the backend:

```bash
npm run dev
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

## 🔢 API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/todos`     | Get all todos |
| POST   | `/api/todos`     | Add new todo  |
| PUT    | `/api/todos/:id` | Update todo   |
| DELETE | `/api/todos/:id` | Delete todo   |

---

## 🎓 Learning Outcomes

* Build a full-stack app from scratch
* Understand PostgreSQL integration
* Use RESTful API with Express
* Manage state and UI in React

---


