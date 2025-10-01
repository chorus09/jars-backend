import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [FlightsModule, ReservationsModule],
})
export class AppModule {}