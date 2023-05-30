import { Transport } from "./Transport";

export class Ship implements Transport {
  deliver(): string {
    return "Entrega por mar";
  }
}
