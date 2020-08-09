import { ICreateClassDTO } from './CreateClassDTO';
import { Class } from '../../entities/Class';
import { IClassRepository } from '../../repositories/IClassRepository';

export class CreateClassUseCase {
  constructor(
        private classRepository: IClassRepository
  ) {}  
          
  async create(data: ICreateClassDTO): Promise<number> {
    const newClass = new Class(data);
    return await this.classRepository.save(newClass);
  }
}