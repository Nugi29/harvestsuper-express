import { Gender } from '../entity/Gender';

export class GenderDAO {
  
  async findAll() {
    return await Gender.findAll();
  }

}
