import { Class } from '../entities/Class';

export interface IClassRepository {
    findAll(): Promise<Class[]>;
    findById(id: number): Promise<Class>;
    save(data: Class): Promise<number>;
}