import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, username: 'admin', role: 'admin' },
    { id: 2, username: 'client1', role: 'client' }
  ];

  findAll() {
    return this.users;
  }
}
