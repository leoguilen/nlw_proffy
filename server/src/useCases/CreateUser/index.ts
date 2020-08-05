import { SqliteUserRepository } from '../../repositories/implementations/SqliteUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const sqliteUserRepository = new SqliteUserRepository();

const createUserUseCase = new CreateUserUseCase(
  sqliteUserRepository
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };