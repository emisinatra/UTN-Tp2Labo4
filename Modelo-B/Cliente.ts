import { Factura } from "./Factura";
export class Cliente{
    numero: number;
    razonSocial: string;
    cuit: number;
    facturas: Array<Factura>;

    constructor(numero: number, razonSocial: string, cuit: number){
        this.numero = numero;
        this. razonSocial = razonSocial;
        this. cuit = cuit;
        this.facturas = Array<Factura>();
    }

    addFactura(factura: Factura){
        this.facturas.push(factura);
    }
    totalFacturadoXTipoPago(tipoPago: string): number{
        let total: number = 0;
        this.facturas.forEach(factura =>{
            factura.setTipoPago(tipoPago);
            factura.calcularTotalFinal();
            total += factura.totalFinal;
        });
        return total;
    }
}