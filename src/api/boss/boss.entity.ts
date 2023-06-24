import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { RegularUser } from '../user/user.entity';

@Entity()
export class Boss {
  @PrimaryGeneratedColumn()
  public id!: number;

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

  @OneToMany(() => RegularUser, (regularUser) => regularUser.boss)
  regularUsers: RegularUser[];
}
