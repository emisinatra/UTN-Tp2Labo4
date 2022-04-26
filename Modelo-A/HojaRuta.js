"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero) {
        this.detalles = Array();
        this.fecha = fecha;
        this.numero = numero;
    }
    HojaRuta.prototype.addDetalle = function (detalle) {
        this.detalles.push(detalle);
    };
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var total = 0;
        this.detalles.forEach(function (element) {
            total += element.kmRegreso - element.kmSalida;
        });
        return total;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
