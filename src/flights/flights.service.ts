import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightsService {
  private filePath = path.join(__dirname, '../../data/flights.json');
  private flights: CreateFlightDto[];

  constructor() {
    const data = fs.readFileSync(this.filePath, 'utf8');
    this.flights = JSON.parse(data);
  }

  private saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.flights, null, 2));
  }

  findAll() {
    return this.flights;
  }

  findOne(id: number) {
    const flight = this.flights.find((f) => f.id === id);
    if (!flight) {
      throw new NotFoundException(`Flight with id ${id} not found`);
    }
    return flight;
  }

  create(dto: CreateFlightDto) {
    const newFlight = { ...dto, id: Date.now() };
    this.flights.push(newFlight);
    this.saveToFile();
    return newFlight;
  }

  update(id: number, dto: UpdateFlightDto) {
    const flight = this.findOne(id);
    Object.assign(flight, dto);
    this.saveToFile();
    return flight;
  }

  remove(id: number) {
    const index = this.flights.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new NotFoundException(`Flight with id ${id} not found`);
    }
    const deleted = this.flights.splice(index, 1)[0];
    this.saveToFile();
    return { message: 'Flight deleted', deleted };
  }

  findByName(name: string) {
    return this.flights.filter((f) =>
      f.name.toLowerCase().includes(name.toLowerCase()),
    );
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
      result = result.filter((f) =>
        f.name.toLowerCase().includes(query.name!.toLowerCase()),
      );
    }

    if (query.from) {
      result = result.filter((f) =>
        f.from.toLowerCase().includes(query.from!.toLowerCase()),
      );
    }

    if (query.to) {
      result = result.filter((f) =>
        f.to.toLowerCase().includes(query.to!.toLowerCase()),
      );
    }

    if (query.minPrice) {
      result = result.filter((f) => f.price >= query.minPrice!);
    }

    if (query.maxPrice) {
      result = result.filter((f) => f.price <= query.maxPrice!);
    }

    return result;
  }
}
