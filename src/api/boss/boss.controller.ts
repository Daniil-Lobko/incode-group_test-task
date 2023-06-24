import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BossService } from "./boss.service";
import { Boss } from "./boss.entity";
import { CreateBossDto, UpdateBossDto } from "./boss.dto";
import { RegularUser } from "../user/user.entity";

@Controller('boss')
export class BossController {
  @Inject(BossService)
  private readonly service: BossService;

  @Get(':id')
  public getBoss(@Param('id', ParseIntPipe) id: number): Promise<Boss> {
    return this.service.getBoss(id);
  }

  @Get()
  public getAllBosses(): Promise<Boss[]> {
    return this.service.getAllBosses();
  }

  @Get('getSubordinates/:id')
  public getSubordinates(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<RegularUser[]> {
    return this.service.getSubordinates(id);
  }

  @Post()
  public createBoss(@Body() body: CreateBossDto): Promise<Boss> {
    return this.service.createBoss(body);
  }

  @Put('update-boss')
  public async updateBoss(@Body() body: UpdateBossDto): Promise<RegularUser> {
    return await this.service.updateBoss(body);
  }
}
