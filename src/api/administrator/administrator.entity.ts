import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 30 })
  public name: string;

  @Column({ type: 'varchar', length: 30 })
  public phone: string;

  @Column({ type: 'varchar', length: 30 })
  public password: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
