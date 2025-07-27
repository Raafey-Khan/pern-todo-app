import express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.controllers';

const router = express.Router();

router.get('/', getTodos);
router.post('/todos', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
