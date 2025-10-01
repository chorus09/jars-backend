import { Module, MiddlewareConsumer } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UsersModule } from './users/users.module';
import { RoleMiddleware } from './common/role.middleware';

@Module({
  imports: [FlightsModule, ReservationsModule, UsersModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoleMiddleware).forRoutes('*');
  }
}
