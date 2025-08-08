import express from 'express';
import { getAllConcerts } from '../controllers/concertControllers';

const router = express.Router();

router.get('/', getAllConcerts);

export default router;
