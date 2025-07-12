import express from 'express';
import { EmployeeController } from '../controller/EmployeeController';

const router = express.Router();
const employeeController = new EmployeeController();

router.get('/list', (req, res) => employeeController.getAllIdName(req, res)); // http://localhost:3000/employees/id-name
router.get('/', (req, res) => employeeController.getAll(req, res));  // http://localhost:3000/employees/
router.get('/:id', (req, res) => employeeController.getById(req, res)); // http://localhost:3000/employees/1
router.post('/', (req, res) => employeeController.create(req, res));
router.put('/:id', (req, res) => employeeController.update(req, res));
router.delete('/:id', (req, res) => employeeController.delete(req, res));

export default router;
