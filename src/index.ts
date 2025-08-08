import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { pool } from './db/pool';

import { errorHandler } from './middlewares/errorHandler';

import concertRoutes from './routes/concertRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/concerts', concertRoutes);

app.use(errorHandler);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/ping-db', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`DB responded at: ${result.rows[0].now}`);
  } catch (err) {
    console.error('DB connection error:', err);
    res.status(500).send('Database connection failed');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
