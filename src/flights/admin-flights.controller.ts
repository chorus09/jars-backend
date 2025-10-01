import { Controller, Get, Param, ParseIntPipe, Put, Body } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('admin/flights')
export class AdminFlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('list')
  getAllFlights() {
    return this.flightsService.findAll();
  }

  @Put('edit/:id')
  editFlight(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFlight: Partial<CreateFlightDto>
  ) {
    return this.flightsService.updateFlight(id, updateFlight);
  }
}
