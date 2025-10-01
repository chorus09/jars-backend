import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) { }

  @Get('list')
  getAllFlights() {
    return this.flightsService.findAll();
  }

  @Get('details/:id')
  getFlightDetails(@Param('id', ParseIntPipe) id: number) {
    return this.flightsService.findOne(id);
  }
  
  @Get('findByName/:name')
  findByName(@Param('name') name: string) {
    return this.flightsService.findByName(name);
  }

  @Get('search')
  searchFlights(
    @Query('name') name?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
  ) {
    return this.flightsService.search({
      name,
      from,
      to,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  }
}
