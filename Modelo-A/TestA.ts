import { Detalle } from "./Detalle";
import { HojaRuta } from "./HojaRuta";
import { Vehiculo } from "./Vehiculo";

var vehiculo1 = new Vehiculo("AA218WX", "Renault", "Clio");

var hojaRuta1 = new HojaRuta(new Date(2020, 1, 15), 1);
var hojaRuta2 = new HojaRuta(new Date(2020, 6, 20), 2);
var hojaRuta3 = new HojaRuta(new Date(2021, 4, 25), 3);

var detalle1 = new Detalle(80000, 80300);
var detalle2 = new Detalle(81100, 81200);
var detalle3 = new Detalle(82300, 82500);
hojaRuta1.addDetalle(detalle1);
hojaRuta1.addDetalle(detalle2);
hojaRuta1.addDetalle(detalle3);

var detalle4 = new Detalle(83150, 83300);
var detalle5 = new Detalle(83300, 83400);
var detalle6 = new Detalle(83500, 84000);
hojaRuta2.addDetalle(detalle4);
hojaRuta2.addDetalle(detalle5);
hojaRuta2.addDetalle(detalle6);

var detalle7 = new Detalle(84000, 84100);
var detalle8 = new Detalle(84100, 84150);
var detalle9 = new Detalle(84150, 84200);
hojaRuta3.addDetalle(detalle7);
hojaRuta3.addDetalle(detalle8);
hojaRuta3.addDetalle(detalle9);

vehiculo1.addHojaRuta(hojaRuta1);
vehiculo1.addHojaRuta(hojaRuta2);
vehiculo1.addHojaRuta(hojaRuta3);

console.log(
  "Kilometros recorridos desde Febrero de 2020 hasta Febrero de 2021:"
);
console.log(
  vehiculo1.calcularTotalKilometrosRecorridos(
    new Date(2020, 2, 1),
    new Date(2021, 2, 1)
  )
);
