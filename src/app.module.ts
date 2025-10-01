import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FlightsModule, ReservationsModule, UsersModule],
})
export class AppModule {}
