import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BossModule } from './boss/boss.module';
import { AdministratorModule } from './administrator/administrator.module';

@Module({
  imports: [UserModule, BossModule, AdministratorModule]
})
export class ApiModule {}
