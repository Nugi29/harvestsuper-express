import { User } from '../entity/User';

export class UserDAO {
  async findAll() {
    return await User.findAll();
  }

  async findById(id: number) {
    return await User.findByPk(id);
  }

  async save(data: { name: string; email: string }) {
    return await User.create(data);
  }

  async update(id: number, data: { name?: string; email?: string }) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
    }
  }
}
