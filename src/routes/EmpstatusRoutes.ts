import express from 'express';
import { EmpstatusController } from '../controller/EmpstatusController';

const router = express.Router();
const empstatusController = new EmpstatusController();

router.get('/list', (req, res) => empstatusController.getAll(req, res));  // http://localhost:3000/empstatuss/list

export default router;
