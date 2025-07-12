import { Request, Response } from 'express';
import { EmployeeDAO } from '../dao/Employeedao';

const dao = new EmployeeDAO();

export class EmployeeController {
  async getAllIdName(req: Request, res: Response) {
    const employees = await dao.findAllIdName();
    res.json(employees);
  }
  
  async getAll(req: Request, res: Response) {
    const employees = await dao.findAll();
    res.json(employees);
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const employee = await dao.findById(id);
    employee ? res.json(employee) : res.status(404).send('Employee not found');
  }

  async create(req: Request, res: Response) {
    const employee = await dao.save(req.body);
    res.status(201).json(employee);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const employee = await dao.update(id, req.body);
    employee ? res.json(employee) : res.status(404).send('Not found');
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await dao.delete(id);
    res.status(204).send();
  }
}
