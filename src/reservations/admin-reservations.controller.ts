// src/reservations/admin-reservations.controller.ts
import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Patch, 
  Post, 
  ParseIntPipe, 
  UsePipes, 
  ValidationPipe 
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Role } from 'src/common/decorators/role.decorator';

@Controller('admin/reservations')
export class AdminReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get('list')
  @Role('admin')
  getAllReservations() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @Role('admin')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.findOne(id);
  }

  @Post('create')
  @Role('admin')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createReservation(@Body() dto: CreateReservationDto) {
    return this.reservationsService.create(dto);
  }

  @Patch('update/:id')
  @Role('admin')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  updateReservation(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(id, dto);
  }

  @Delete('delete/:id')
  @Role('admin')
  deleteReservation(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.remove(id);
  }
}
