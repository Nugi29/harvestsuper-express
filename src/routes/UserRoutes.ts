import express from 'express';
import { UserController } from '../controller/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/', (req, res) => userController.getAll(req, res));  // http://localhost:3000/users/
router.get('/:id', (req, res) => userController.getById(req, res)); // http://localhost:3000/users/1
router.post('/', (req, res) => userController.create(req, res));
router.delete('/:id', (req, res) => userController.delete(req, res));

export default router;
