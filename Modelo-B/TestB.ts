import { Articulo } from "./Articulo";
import {Cliente} from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";

var cliente1 = new Cliente(1,"Garcia Armenteros", 20402719738);

var articulo1 = new Articulo(100,"Chocolate barra",150,"50 gr");
var articulo2 = new Articulo(101,"Papas Lays",130,"80 gr");
var articulo3 = new Articulo(102,"Cerveza Quilmes",140,"750 ml");
var articulo4 = new Articulo(103,"Encendedor Bic",170,"5 cm");
var articulo5 = new Articulo(104,"Cigarrillos Philips",260,"20 uni");
var articulo6 = new Articulo(105,"Pan", 300, "1 kg");

var factura1 = new Factura("B",405512,new Date(2021,3,21));
var factura2 = new Factura("A",1000023,new Date(2021,5,10));
var factura3 = new Factura("B",405513, new Date(2021,9,2));

var detalle1 = new DetalleFactura(2, articulo1);
var detalle2 = new DetalleFactura(2, articulo2);
var detalle3 = new DetalleFactura(3, articulo3);
var detalle4 = new DetalleFactura(1, articulo4);
var detalle5 = new DetalleFactura(2, articulo5);
var detalle6 = new DetalleFactura(1, articulo6);

factura1.addDetalleFactura(detalle1);
factura1.addDetalleFactura(detalle2);

factura2.addDetalleFactura(detalle3);
factura2.addDetalleFactura(detalle4);

factura3.addDetalleFactura(detalle5);
factura3.addDetalleFactura(detalle6);

cliente1.addFactura(factura1);
cliente1.addFactura(factura2);
cliente1.addFactura(factura3);

console.log(`\nCliente: ${cliente1.razonSocial}\n`);
cliente1.facturas.forEach(factura =>{
    console.log(`Factura numero: ${factura.numero}`);
    factura.detalles.forEach(detalle =>{
        console.log(`\tArticulo: ${detalle.articulo.denominacion} -- Precio: ${detalle.articulo.precio} -- Subtotal: ${detalle.getSubtotal()}`);
    })
});
console.log(`\nEl total es de: ${cliente1.totalFacturadoXTipoPago('')}`);
console.log(`\nEl total pagando con Tarjeta de Credito es de: ${cliente1.totalFacturadoXTipoPago('TC')}\n`);


