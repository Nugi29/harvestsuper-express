import { Request, Response } from 'express';
import { UserDAO } from '../dao/UserDAO';

const dao = new UserDAO();

export class UserController {
  async getAll(req: Request, res: Response) {
    const users = await dao.findAll();
    res.json(users);
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await dao.findById(id);
    user ? res.json(user) : res.status(404).send('User not found');
  }

  async create(req: Request, res: Response) {
    const user = await dao.save(req.body);
    res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await dao.update(id, req.body);
    user ? res.json(user) : res.status(404).send('Not found');
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await dao.delete(id);
    res.status(204).send();
  }
}
