import { Articulo } from "./Articulo";

export class DetalleFactura{
    cantidad: number = 0;
    private subtotal: number = 0;
    articulo: Articulo;

    constructor(cantidad: number, articulo: Articulo){
        this.cantidad = cantidad;
        this.articulo = articulo;

    }
    calcularSubTotal() {
        this.subtotal = this.cantidad * this.articulo.precio;
    }
    getSubtotal(): number{
        this.calcularSubTotal();
        return this.subtotal;
    }
}