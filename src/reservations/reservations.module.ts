import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ClientReservationsController } from './client-reservations.controller';
import { AdminReservationsController } from './admin-reservations.controller';

@Module({
  controllers: [ReservationsController, AdminReservationsController, ClientReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
