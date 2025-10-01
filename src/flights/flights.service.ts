import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FlightsService {
  private flights: any[];

  constructor() {
    const filePath = path.join(__dirname, '../../data/flights.json');
    const data = fs.readFileSync(filePath, 'utf8');
    this.flights = JSON.parse(data);
  }

  findAll() {
    return this.flights;
  }

  findOne(id: number) {
    const flight = this.flights.find(f => f.id === id);
    if (!flight) {
      throw new NotFoundException(`Flight with id ${id} not found`);
    }
    return flight;
  }
}
