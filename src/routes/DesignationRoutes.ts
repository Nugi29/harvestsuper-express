import express from 'express';
import { DesignationController } from '../controller/DesignationController';

const router = express.Router();
const designationController = new DesignationController();

router.get('/list', (req, res) => designationController.getAll(req, res));  // http://localhost:3000/designations/list

export default router;
