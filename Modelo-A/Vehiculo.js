"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        this.hojasRuta = Array();
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
    }
    Vehiculo.prototype.addHojaRuta = function (hojaRuta) {
        this.hojasRuta.push(hojaRuta);
    };
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var total = 0;
        this.hojasRuta.forEach(function (hoja) {
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                total += hoja.calcularTotalKilometros();
            }
        });
        return total;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
