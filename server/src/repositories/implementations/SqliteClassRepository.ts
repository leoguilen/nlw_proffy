import { IClassRepository } from '../IClassRepository';
import { Class } from '../../entities/Class';
import db from '../../database/connection';

export class SqliteClassRepository implements IClassRepository {
  async findAll(): Promise<Class[]> {
    try {
      const classes = await db('classes').select('*');
      return classes;    
    } catch (err) {
      throw new Error(err);
    }
  }

  async findById(id: number): Promise<Class> {
    try {
      const classObj = await db('classes').where('id', id);
      return classObj[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  async save(data: Class): Promise<number> {
    const trx = await db.transaction();

    try {
      const insertedClassId = await trx('classes').insert({
        subject: data.subject,
        cost: data.cost,
        user_id: data.userId
      });

      await trx.commit();
      return insertedClassId[0];
    } catch (err) {
      await trx.rollback();
      throw new Error(err);
    }
  }

}