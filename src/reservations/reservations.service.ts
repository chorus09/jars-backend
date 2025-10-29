// src/reservations/reservations.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  private filePath = path.join(__dirname, '../../data/reservations.json');
  private reservations: any[];

  constructor() {
    const data = fs.readFileSync(this.filePath, 'utf8');
    this.reservations = JSON.parse(data);
  }

  private saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.reservations, null, 2));
  }

  findAll() {
    return this.reservations;
  }

  findOne(id: number) {
    const reservation = this.reservations.find((r) => r.id === id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    return reservation;
  }

  findByUser(username: string) {
    return this.reservations.filter((r) =>
      r.clientName.toLowerCase().includes(username.toLowerCase()),
    );
  }

  create(dto: CreateReservationDto) {
    const newReservation = { ...dto, id: Date.now() };
    this.reservations.push(newReservation);
    this.saveToFile();
    return newReservation;
  }

  update(id: number, dto: UpdateReservationDto) {
    const reservation = this.findOne(id);
    Object.assign(reservation, dto);
    this.saveToFile();
    return reservation;
  }

  remove(id: number) {
    const index = this.reservations.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    const deleted = this.reservations.splice(index, 1)[0];
    this.saveToFile();
    return { message: 'Reservation deleted', deleted };
  }
}
