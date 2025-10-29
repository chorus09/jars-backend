// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private filePath = path.join(__dirname, '../../data/users.json');
  private users: any[];

  constructor() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([], null, 2));
    }
    const data = fs.readFileSync(this.filePath, 'utf8');
    this.users = JSON.parse(data);
  }

  private saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 2));
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  create(dto: CreateUserDto) {
    const newUser = { id: Date.now(), ...dto };
    this.users.push(newUser);
    this.saveToFile();
    return newUser;
  }

  update(id: number, dto: UpdateUserDto) {
    const user = this.findOne(id);
    Object.assign(user, dto);
    this.saveToFile();
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException(`User with id ${id} not found`);
    const deleted = this.users.splice(index, 1)[0];
    this.saveToFile();
    return { message: 'User deleted', deleted };
  }
}
