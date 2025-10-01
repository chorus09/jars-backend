import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get('list')
  getAllReservations() {
    return this.reservationsService.findAll();
  }

  @Get('details/:id')
  getReservationDetails(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.findOne(id);
  }
}
