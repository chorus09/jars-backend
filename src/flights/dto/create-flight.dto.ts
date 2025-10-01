export class CreateFlightDto {
  readonly id: number;
  readonly name: string;
  readonly from: string;
  readonly to: string;
  readonly departureTime: string;
  readonly arrivalTime: string;
  readonly price: number;
  readonly status: string;
}
