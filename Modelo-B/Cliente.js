"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.facturas = Array();
    }
    Cliente.prototype.addFactura = function (factura) {
        this.facturas.push(factura);
    };
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        this.facturas.forEach(function (factura) {
            factura.setTipoPago(tipoPago);
            factura.calcularTotalFinal();
            total += factura.totalFinal;
        });
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
