import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { RegularUser } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(RegularUser)
  private readonly repository: Repository<RegularUser>;

  public getUser(id: number): Promise<RegularUser> {
    return this.repository.findOne({ where: { id } });
  }

  public getAllUsers(): Promise<RegularUser[]> {
    return this.repository.find();
  }

  public createUser(body: CreateUserDto): Promise<RegularUser> {
    const user: RegularUser = new RegularUser();

    user.name = body.name;
    user.phone = body.phone;
    user.password = body.password;
    user.bossId = body.bossId;
    return this.repository.save(user);
  }
}
