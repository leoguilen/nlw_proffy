export class Connection {
    public readonly id!: number;

    public userId!: number;
    public createdAt?: Date;

    constructor(props: Omit<Connection,'id'>) {
      Object.assign(this, props);
    }
}