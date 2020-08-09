import { IClassRepository } from '../../repositories/IClassRepository';
import { Class } from '../../entities/Class';

export class ListClassesUseCase {
  constructor(
        private classRepository: IClassRepository
  ) {}

  async getAll(): Promise<Class[]> {
    const classes = await this.classRepository.findAll();
    return classes;
  }

  async getById(id: number): Promise<Class> {
    const classObj = await this.classRepository.findById(id);
    return classObj;
  }
}