import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class payColumn {
  public amount: number;
  constructor(public hour: number, public rate: number) {
    this.amount = hour * rate;
  }
}
@Entity()
export class PaySlip {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('varchar', { length: 100, nullable: false })
  name!: string;

  @Column('varchar')
  reqularPay!: payColumn;

  @Column('varchar')
  overTime!: payColumn;

  @Column('varchar')
  vacation!: payColumn;

  @Column('varchar')
  sickDay!: payColumn;

  @Column('varchar')
  period!: number;

  @CreateDateColumn()
  createdAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
