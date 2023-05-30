import { Transport } from "./Transport";

export class Truck implements Transport {
  deliver(): string {
    return "Transportando por tierra.....";
  }
}
