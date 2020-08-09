import { Connection } from '../entities/Connection';

export interface IConnectionRepository {
    countAll(): Promise<number|string>;
    save(data: Connection): Promise<void>;    
}