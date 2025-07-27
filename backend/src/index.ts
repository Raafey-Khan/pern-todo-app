import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req,res) => {
   res.send('working fine pern todo app')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
