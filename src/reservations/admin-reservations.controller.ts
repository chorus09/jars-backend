import { Controller, Get } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('admin/reservations')
export class AdminReservationsController {
   constructor(private readonly reservationsService: ReservationsService) { }

   @Get('list')
   getAllReservations() {
      return this.reservationsService.findAll();
   }
}
