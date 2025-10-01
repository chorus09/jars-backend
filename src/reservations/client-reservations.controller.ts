import { Controller, Get, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ClientReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get('my/:username')
  getUserReservations(@Param('username') username: string) {
    return this.reservationsService.findByUser(username);
  }
}
