import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './administrator.entity';
import { Boss } from "../boss/boss.entity";
import { RegularUser } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Administrator, Boss, RegularUser])],
  providers: [AdministratorService],
  controllers: [AdministratorController],
})
export class AdministratorModule {}
