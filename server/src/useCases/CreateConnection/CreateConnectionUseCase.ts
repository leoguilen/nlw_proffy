import { IConnectionRepository } from '../../repositories/IConnectionRepository';
import { ICreateConnectionDTO } from './CreateConnectionDTO';
import { Connection } from '../../entities/Connection';

export class CreateConnectionUseCase {
  constructor(
        private connectionRepository: IConnectionRepository
  ) {}

  async create(connection: ICreateConnectionDTO): Promise<void> {
    const newConnection = new Connection(connection);
    await this.connectionRepository.save(newConnection);
  }
}