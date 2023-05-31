import { VehiculoPesadoFactory, VehiculoCivilFactory } from "../cosoautos/automobiles/vehiculo";


function main() {
    const vehiculoPesadoFactory = new VehiculoPesadoFactory();
    const vehiculoPesado = vehiculoPesadoFactory.crearVehiculo();

    const vehiculoCivilFactory = new VehiculoCivilFactory();
    const vehiculoCivil = vehiculoCivilFactory.crearVehiculo();
}

main();