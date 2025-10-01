import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    const reservation = this.reservations.find(r => r.id === id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    return reservation;
  }
}
