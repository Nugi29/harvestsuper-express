import express from 'express';
import { EmptypeController } from '../controller/EmptypeController';

const router = express.Router();
const emptypeController = new EmptypeController();

router.get('/list', (req, res) => emptypeController.getAll(req, res));  // http://localhost:3000/emptypes/list

export default router;
