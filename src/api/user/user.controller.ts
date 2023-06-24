import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { RegularUser } from './user.entity';
import { UserService } from './user.service';
import { Boss } from '../boss/boss.entity';

@Controller('regularUser')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<RegularUser> {
    return this.service.getUser(id);
  }

  @Get()
  public getAllUsers(): Promise<RegularUser[]> {
    return this.service.getAllUsers();
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<RegularUser> {
    return this.service.createUser(body);
  }
}
