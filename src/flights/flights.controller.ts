import { Controller, Get } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('list')
  getAllFlights() {
    return this.flightsService.findAll();
  }
}