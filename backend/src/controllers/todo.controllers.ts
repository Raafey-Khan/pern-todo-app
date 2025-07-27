import { Request, Response } from 'express';
import pool from '../db/index';

export const getTodos = async (_req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
  res.json(result.rows);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const result = await pool.query(
    'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
    [title, false]
  );
  res.status(201).json(result.rows[0]);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.status(204).send();
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed, title } = req.body;

  const fields = [];
  const values: any[] = [];

  if (typeof completed === 'boolean') {
    fields.push('completed');
    values.push(completed);
  }

  if (title !== undefined) {
    fields.push('title');
    values.push(title);
  }

  if (fields.length === 0) {
    return res.status(400).json({ message: 'No fields to update.' });
  }

  const setClause = fields.map((field, idx) => `${field} = $${idx + 1}`).join(', ');
  const result = await pool.query(
    `UPDATE todos SET ${setClause} WHERE id = $${values.length + 1} RETURNING *`,
    [...values, id]
  );

  res.json(result.rows[0]);
};



