import { IConnectionRepository } from '../IConnectionRepository';
import { Connection } from '../../entities/Connection';
import db from '../../database/connection';

export class SqliteConnectionRepository implements IConnectionRepository {
  async countAll(): Promise<number|string> {
    try {
      const connections = await db('connections').count('* as total');
            
      const { total } = connections[0];
            
      return total;

    } catch (err) {
      throw new Error(err);
    }
  }
  async save(data: Connection): Promise<void> {
    const connection = new Connection(data);

    await db('connections').insert({
      user_id: connection.userId
    });
  }

}