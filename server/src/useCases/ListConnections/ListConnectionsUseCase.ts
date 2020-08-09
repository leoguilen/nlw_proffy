import { IConnectionRepository } from '../../repositories/IConnectionRepository';

export class ListConnectionsUseCase {
  constructor(
        private connectionRepository: IConnectionRepository
  ) {}

  async getTotal(): Promise<number> {
    const total = await this.connectionRepository.countAll();
    return Number(total);
  }
}