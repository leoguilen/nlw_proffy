import { SqliteClassRepository } from '../../repositories/implementations/SqliteClassRepository';
import { ListClassesUseCase } from './ListClassesUseCase';
import { ListClassesController } from './ListClassesController';

const sqliteClassRepository = new SqliteClassRepository();

const listClassesUseCase = new ListClassesUseCase(
  sqliteClassRepository
);

const listClassesController = new ListClassesController(
  listClassesUseCase
);

export { listClassesUseCase, listClassesController };