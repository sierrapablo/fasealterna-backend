import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { errorHandler } from './middlewares/errorHandler';

import concertRoutes from './routes/concertRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/concerts', concertRoutes);

app.use(errorHandler);

(async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})().catch((error) => {
  console.error(`Failed to start the server: ${error}`);
  process.exit(1);
});