import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserDTO } from './CreateUserDTO';
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async create(data: ICreateUserDTO): Promise<number> {
    const newUser = new User(data);
    return await this.userRepository.save(newUser);
  }
}