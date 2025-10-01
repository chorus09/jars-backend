import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { AdminFlightsController } from './admin-flights.controller';

@Module({
  controllers: [FlightsController, AdminFlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}