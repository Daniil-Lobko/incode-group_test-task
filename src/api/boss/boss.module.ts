import { Module } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossController } from './boss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boss } from './boss.entity';
import { RegularUser } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boss, RegularUser])],
  providers: [BossService],
  controllers: [BossController],
})
export class BossModule {}
