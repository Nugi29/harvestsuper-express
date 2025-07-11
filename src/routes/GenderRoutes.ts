import express from 'express';
import { GenderController } from '../controller/GenderController';

const router = express.Router();
const genderController = new GenderController();

router.get('/list', (req, res) => genderController.getAll(req, res));  // http://localhost:3000/genders/list

export default router;
