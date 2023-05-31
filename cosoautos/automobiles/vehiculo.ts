interface AbstractVehiculoFactory {
    crearVehiculo(): Auto;
}

export class VehiculoPesadoFactory implements AbstractVehiculoFactory {
    public crearVehiculo(): Auto {
        const builder = new BuilderVehiculoPesado();
        return builder.getProduct();
    }
}

export class VehiculoCivilFactory implements AbstractVehiculoFactory {
    public crearVehiculo(): Auto {
        const builder = new BuilderVehiculoCivil();
        return builder.getProduct();
    }
}

interface BuilderVehiculo {
    buildVentanas(arg0: number): void;
    buildRuedas(arg0: number): void;
    buildSeats(arg0: number): void;
    buildPuertas(arg0: number): void;
}

export class BuilderVehiculoPesado implements BuilderVehiculo {
    private product!: Auto;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Auto();
    }

    //

    public buildVentanas(number: number): void {
        this.product.ventanas = number;
    }
    public buildRuedas(number: number): void {
        this.product.ruedas = number;
    }
    public buildSeats(number: number): void {
        this.product.seats = number;
    }
    public buildPuertas(number: number): void {
        this.product.puertas = number;
    }

    //

    public getProduct(): Auto{
        const result = this.product;
        this.reset();
        return result;
    }
}

export class BuilderVehiculoCivil implements BuilderVehiculo {
    private product!: Auto;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Auto();
    }

    //

    public buildVentanas(number: number): void {
        this.product.ventanas = number;
    }
    public buildRuedas(number: number): void {
        this.product.ruedas = number;
    }
    public buildSeats(number: number): void {
        this.product.seats = number;
    }
    public buildPuertas(number: number): void {
        this.product.puertas = number;
    }

    //

    public getProduct(): Auto{
        const result = this.product;
        this.reset();
        return result;
    }
}

export class Auto {
    public ventanas!: number;
    public ruedas!: number;
    public seats!: number;
    public puertas!: number;

    public startEngine(): void {  
    }
    public stopEngine(): void {  
    }
    public accelerate(): void {   
    }
    public brake(): void {   
    }

    public reporto(): string{
        return `Ventanas: ${this.ventanas}, Ruedas: ${this.ruedas}, Seats: ${this.seats}, Puertas: ${this.puertas}`;
    }
}

export class Director {
    private builder!: BuilderVehiculo;
  
    public setBuilder(builder: BuilderVehiculo): void {
      this.builder = builder;
    }
  
    public constructProductWithMinimumRequirements(): void {
      this.builder.buildRuedas(2);
      this.builder.buildSeats(1);
    }
  }
