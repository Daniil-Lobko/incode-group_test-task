import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateBossDto, UpdateBossDto } from './boss.dto';
import { Boss } from './boss.entity';
import { RegularUser } from '../user/user.entity';

@Injectable()
export class BossService {
  @InjectRepository(Boss)
  private readonly repository: Repository<Boss>;
  @InjectRepository(RegularUser)
  private readonly repositoryUser: Repository<RegularUser>;

  public getBoss(id: number): Promise<Boss> {
    return this.repository.findOne({ where: { id } });
  }

  public getAllBosses(): Promise<Boss[]> {
    return this.repository.find();
  }

  public async getSubordinates(bossId: number): Promise<RegularUser[]> {
    const boss = await this.repository
      .createQueryBuilder('boss')
      .innerJoinAndSelect('boss.regularUsers', 'regularUser')
      .where('boss.id = :id', { id: bossId })
      .getOne();

    if (boss) {
      return boss.regularUsers;
    } else {
      return [];
    }
  }

  public createBoss(body: CreateBossDto): Promise<Boss> {
    const boss: Boss = new Boss();

    boss.name = body.name;
    boss.phone = body.phone;
    boss.password = body.password;
    return this.repository.save(boss);
  }

  public async updateBoss(body: UpdateBossDto): Promise<RegularUser> {
    const user: RegularUser = await this.repositoryUser.findOne({
      where: { phone: body.user },
      relations: ['boss'], // Включаем связь с боссом
    });
    console.log(user);
    if (user) {
      const boss: Boss = await this.repository.findOne({
        where: { id: body.newBossId },
      });
      user.boss = boss; // Присваиваем нового босса
      user.bossId = boss.id;
      return this.repositoryUser.save(user);
    }
  }
}
