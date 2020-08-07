import { User } from '../entities/User';

export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    save(user: User): Promise<number>;
}