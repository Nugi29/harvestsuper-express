import { Emptype } from "../entity/Emptype";


export class EmptypeDAO {
  
  async findAll() {
    return await Emptype.findAll();
  }

}
