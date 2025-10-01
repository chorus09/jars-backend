import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('list')
  getAllFlights() {
    return this.flightsService.findAll();
  }

  @Get('details/:id')
  getFlightDetails(@Param('id', ParseIntPipe) id: number) {
    return this.flightsService.findOne(id);
  }
}
