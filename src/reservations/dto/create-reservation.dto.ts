export class CreateReservationDto {
  readonly id: number;
  readonly flightId: number;
  readonly clientName: string;
  readonly seat: string;
  readonly price: number;
}
