import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Role } from 'src/common/decorators/role.decorator';

@Controller('admin/flights')
export class AdminFlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('list')
  @Role('admin')
  getAllFlights() {
    return this.flightsService.findAll();
  }

  @Get(':id')
  @Role('admin')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.flightsService.findOne(id);
  }

  @Post('create')
  @Role('admin')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createFlight(@Body() dto: CreateFlightDto) {
    return this.flightsService.create(dto);
  }

  @Patch('update/:id')
  @Role('admin')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  updateFlight(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFlightDto,
  ) {
    return this.flightsService.update(id, dto);
  }

  @Delete('delete/:id')
  @Role('admin')
  deleteFlight(@Param('id', ParseIntPipe) id: number) {
    return this.flightsService.remove(id);
  }
}
