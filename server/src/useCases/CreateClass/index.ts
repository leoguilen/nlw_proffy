import { SqliteClassRepository } from '../../repositories/implementations/SqliteClassRepository';
import { CreateClassUseCase } from './CreateClassUseCase';
import { CreateClassController } from './CreateClassController';

const sqliteClassRepository = new SqliteClassRepository();

const createClassUseCase = new CreateClassUseCase(
  sqliteClassRepository
);

const createClassController = new CreateClassController(
  createClassUseCase
);

export { createClassUseCase, createClassController };