export class Connection {
    public readonly id!: number;

    public UserId!: number;
    public CreatedAt!: Date;

    constructor(props: Omit<Connection,'id'>) {
      Object.assign(this, props);
    }
}