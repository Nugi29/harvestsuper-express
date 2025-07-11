import { Request, Response } from 'express';
import { GenderDAO } from '../dao/Genderdao';

const dao = new GenderDAO();

export class GenderController {
  async getAll(req: Request, res: Response) {
    const genders = await dao.findAll();
    res.json(genders);
  }
}
