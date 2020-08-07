import { SqliteUserRepository } from '../../repositories/implementations/SqliteUserRepository';
import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';

const sqliteUserRepository = new SqliteUserRepository();

const listUsersUseCase = new ListUsersUseCase(
  sqliteUserRepository
);

const listUsersController = new ListUsersController(
  listUsersUseCase
);

export { listUsersUseCase, listUsersController };