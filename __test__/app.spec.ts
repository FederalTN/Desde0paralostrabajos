// app.spec.ts

import { SeaLogistics } from "../src/PatternDesign/Factory/01-example/SeaLogistics";
import { RoadLogistics } from "../src/PatternDesign/Factory/01-example/RoadLogistics";
import { OrderFacade } from "../src/PatternDesign/Facade/OrderFacade";
import { Singleton } from "../src/PatternDesign/Singleton/Singleton";
import { AdapterTemperatura, Temperatura } from "../src/PatternDesign/Adapter/Example";
import { DirectorHotDog, ConcreteHotDog } from "../src/PatternDesign/Builder/builderRestrictivo/HotDog";
import { ConcreteStrategyAuto, ConcreteStrategyBicicleta, Rutas } from "../src/PatternDesign/Strategy/RutasExample";
import { Radio, TV } from "../src/PatternDesign/Bridge/01-example/BridgeExample";
import { Influencer, Persona1, Persona2 } from "../src/PatternDesign/Observer/01-example/Subscription";
import { Ship } from "../src/PatternDesign/Factory/01-example/Ship";
import { HotDog } from "../src/PatternDesign/Builder/builderSimple/HotDog";

describe("Pruebas para las funciones en app.ts", () => {
    it("Prueba para factoryPattern", () => {
        const seaLogistics = new SeaLogistics();
        const transporte = seaLogistics.crearTransporte();

        expect(transporte).toBeInstanceOf(Ship);
        expect(transporte.deliver()).toBe("Entrega por mar");
      });

  it("Prueba para facadePattern", () => {
    // ...
    // Coloca aquí las pruebas para la función facadePattern
    // ...
  });

  it("Prueba para singletonPattern", () => {
    // ...
    // Coloca aquí las pruebas para la función singletonPattern
    // ...
  });

  it("Prueba para adapterPattern", () => {
    // ...
    // Coloca aquí las pruebas para la función adapterPattern
    // ...
  });

  it("Prueba para builderPattern", () => {
    const director = new DirectorHotDog();
    const builder = new ConcreteHotDog();

    director.setBuilder(builder);
    director.buildMinimalViableProduct();
    

    expect(builder.getProduct().getProductComplete()).toBeInstanceOf(HotDog);
  });

  it("Prueba para strategyPattern", () => {
    // ...
    // Coloca aquí las pruebas para la función strategyPattern
    // ...
  });

  it("Prueba para bridgePattern", async () => {
    // ...
    // Coloca aquí las pruebas para la función bridgePattern
    // ...
  });

  it("Prueba para observerPattern", () => {
    // ...
    // Coloca aquí las pruebas para la función observerPattern
    // ...
  });
});
