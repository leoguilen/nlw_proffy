import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserDTO } from './CreateUserDTO';
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const newUser = new User(data);
    await this.userRepository.save(newUser);
  }
}