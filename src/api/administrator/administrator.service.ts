import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Boss } from '../boss/boss.entity';
import { Repository } from 'typeorm';
import { Administrator } from './administrator.entity';
import { RegularUser } from '../user/user.entity';

@Injectable()
export class AdministratorService {
  @InjectRepository(Administrator)
  private readonly repositoryAdmin: Repository<Administrator>;
  @InjectRepository(Boss)
  private readonly repositoryBoss: Repository<Boss>;

  public async getAllUsers(): Promise<NonNullable<unknown>> {
    const bosses = await this.repositoryBoss.find();

    const promises = bosses.map(async (boss) => {
      const regularUsers = await this.repositoryBoss
        .createQueryBuilder('boss')
        .innerJoinAndSelect('boss.regularUsers', 'regularUser')
        .where('boss.id = :id', { id: boss.id })
        .getOne();
      return { [boss.name]: regularUsers };
    });
    const results = await Promise.all(promises);
    const json: { [bossName: string]: RegularUser[] } = {};

    results.forEach((result) => {
      const bossName = Object.keys(result)[0];
      // @ts-ignore
      json[bossName] = result[bossName];
    });
    return json;
  }
}
