import { Emptype } from "../entity/EmpType";


export class EmptypeDAO {
  
  async findAll() {
    return await Emptype.findAll();
  }

}
