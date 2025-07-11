import { Request, Response } from 'express';
import { EmptypeDAO } from '../dao/Emptypedao';

const dao = new EmptypeDAO();

export class EmptypeController {
  async getAll(req: Request, res: Response) {
    const emptypes = await dao.findAll();
    res.json(emptypes);
  }
}
