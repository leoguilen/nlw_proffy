export class ClassSchedule {
    public readonly id!: number;

    public WeekDay!: number;
    public From!: number;
    public To!: number;
    public ClassId!: number;

    constructor(props: Omit<ClassSchedule,'id'>) {
      Object.assign(this, props);
    }
}