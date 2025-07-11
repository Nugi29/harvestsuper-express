import { Request, Response } from 'express';
import { EmpstatusDAO } from '../dao/Empstatusdao';

const dao = new EmpstatusDAO();

export class EmpstatusController {
  async getAll(req: Request, res: Response) {
    const empstatuses = await dao.findAll();
    res.json(empstatuses);
  }
}
