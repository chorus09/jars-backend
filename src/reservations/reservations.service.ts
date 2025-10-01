import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ReservationsService {
  private reservations: any[];

  constructor() {
    const filePath = path.join(__dirname, '../../data/reservations.json');
    const data = fs.readFileSync(filePath, 'utf8');
    this.reservations = JSON.parse(data);
  }

  findAll() {
    return this.reservations;
  }
}
