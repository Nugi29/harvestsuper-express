import { Designation } from '../entity/Designation';

export class DesignationDAO {
  
  async findAll() {
    return await Designation.findAll();
  }

}
