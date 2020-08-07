import { IUserRepository } from '../../repositories/IUserRepository';
import { User } from '../../entities/User';

export class ListUsersUseCase {
  constructor(
        private userRepository: IUserRepository
  ) {}

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getById(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    return user;
  }
}