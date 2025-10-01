import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateFlightDto } from './dto/create-flight.dto';

@Injectable()
export class FlightsService {
  private flights: CreateFlightDto[];

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

  search(query: {
    name?: string;
    from?: string;
    to?: string;
    minPrice?: number;
    maxPrice?: number;
  }) {
    let result = this.flights;

    if (query.name) {
      result = result.filter(f =>
        f.name.toLowerCase().includes(query.name!.toLowerCase())
      );
    }

    if (query.from) {
      result = result.filter(f =>
        f.from.toLowerCase().includes(query.from!.toLowerCase())
      );
    }

    if (query.to) {
      result = result.filter(f =>
        f.to.toLowerCase().includes(query.to!.toLowerCase())
      );
    }

    if (query.minPrice) {
      result = result.filter(f => f.price >= query.minPrice!);
    }

    if (query.maxPrice) {
      result = result.filter(f => f.price <= query.maxPrice!);
    }

    return result;
  }
}
