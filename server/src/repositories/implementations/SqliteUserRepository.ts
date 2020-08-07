import { IUserRepository } from '../IUserRepository';
import { User } from '../../entities/User';
import db from '../../database/connection';

export class SqliteUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    try {
      const users = await db('users').select('*');
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      const user = await db('users').where('id', id);
      return user[0];
    } catch (err) {
      throw new Error(err);
    }
  }
  
  async save(user: User): Promise<number> {
    const trx = await db.transaction();

    try {
      const insertedUserId = await trx('users').insert(user);

      await trx.commit();
      return insertedUserId[0];
    } catch (err) {
      await trx.rollback();
      throw new Error(err);
    }
  }
}