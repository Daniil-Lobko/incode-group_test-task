import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Boss } from '../boss/boss.entity';

@Unique(['phone'])
@Entity()
export class RegularUser {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 30 })
  public name: string;

  @Column({ type: 'varchar', length: 30 })
  public phone: string;

  @Column({ type: 'varchar', length: 30 })
  public password: string;

  @Column({ nullable: true })
  public bossId: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @ManyToOne(() => Boss, (boss) => boss.regularUsers)
  @JoinColumn({ name: 'bossId' })
  boss: Boss;
}
