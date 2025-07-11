import { Request, Response } from 'express';
import { DesignationDAO } from '../dao/Designationdao';

const dao = new DesignationDAO();

export class DesignationController {
  async getAll(req: Request, res: Response) {
    const designations = await dao.findAll();
    res.json(designations);
  }
}
