import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { Boss } from '../boss/boss.entity';
import { AdministratorService } from './administrator.service';
import { RegularUser } from '../user/user.entity';

@Controller('administrator')
export class AdministratorController {
  @Inject(AdministratorService)
  private readonly service: AdministratorService;
  @Get()
  public getBoss(): Promise<RegularUser[]> {
    // @ts-ignore
    return this.service.getAllUsers();
  }
}
