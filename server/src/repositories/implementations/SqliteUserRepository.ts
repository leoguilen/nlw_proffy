import { IUserRepository } from '../IUserRepository';
import { User } from '../../entities/User';
import db from '../../database/connection';

export class SqliteUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const trx = await db.transaction();
    
    try {
      const users = await trx('users').select('*');
      return users;
    } catch (err) {
      await trx.rollback();
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