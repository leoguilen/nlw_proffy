export class Class {
    public readonly id!: number;

    public subject!: string;
    public cost!: number;
    public userId!: number;

    constructor(props: Omit<Class,'id'>) {
      Object.assign(this, props);
    }
}