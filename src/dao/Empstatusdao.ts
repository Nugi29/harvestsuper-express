import { Empstatus } from "../entity/Empstatus";


export class EmpstatusDAO {
  
  async findAll() {
    return await Empstatus.findAll();
  }

}
