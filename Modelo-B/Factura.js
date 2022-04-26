"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, fecha) {
        this.recargo = 0;
        this.totalItems = 0;
        this.totalFinal = 0;
        this.letra = letra;
        this.numero = numero;
        this.fecha = fecha;
        this.detalles = Array();
    }
    Factura.prototype.addDetalleFactura = function (detalle) {
        this.detalles.push(detalle);
    };
    Factura.prototype.setTipoPago = function (tipoPago) {
        this.tipoPago = tipoPago;
        switch (tipoPago) {
            case 'CC':
                //Recargo del 10% con Tarjeta de Credito
                this.recargo = 0.10;
                break;
            case 'TC':
                //Recargo del 18% con Tarjeta de Credito
                this.recargo = 0.18;
                break;
            default:
                //Sin recargo con Efectivo, Transferencia o Tarjeta de Debito
                this.recargo = 0;
                break;
        }
    };
    Factura.prototype.calcularTotalItems = function () {
        var monto = 0;
        this.detalles.forEach(function (detalle) {
            monto += detalle.getSubtotal();
        });
        this.totalItems = monto;
    };
    Factura.prototype.calcularTotalFinal = function () {
        this.calcularTotalItems();
        var recargoMonto = this.totalItems * this.recargo;
        this.totalFinal = this.totalItems + recargoMonto;
    };
    return Factura;
}());
exports.Factura = Factura;
