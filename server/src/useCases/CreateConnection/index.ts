import { SqliteConnectionRepository } from '../../repositories/implementations/SqliteConnectionRepository';
import { CreateConnectionUseCase } from './CreateConnectionUseCase';
import { CreateConnectionController } from './CreateConnectionController';

const sqliteConnectionRepository = new SqliteConnectionRepository();

const createConnectionUseCase = new CreateConnectionUseCase(
  sqliteConnectionRepository
);

const createConnectionController = new CreateConnectionController(
  createConnectionUseCase
);

export { createConnectionUseCase, createConnectionController };