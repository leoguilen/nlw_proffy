import { SqliteConnectionRepository } from '../../repositories/implementations/SqliteConnectionRepository';
import { ListConnectionsUseCase } from './ListConnectionsUseCase';
import { ListConnectionsController } from './ListConnectionsController';

const sqliteConnectionRepository = new SqliteConnectionRepository();

const listConnectionsUseCase = new ListConnectionsUseCase(
  sqliteConnectionRepository
);

const listConnectionsController = new ListConnectionsController(
  listConnectionsUseCase
);

export { listConnectionsUseCase, listConnectionsController };