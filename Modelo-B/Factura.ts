import { DetalleFactura } from "./DetalleFactura";

export class Factura{
    letra: string;
    numero: number;
    recargo: number = 0;
    private tipoPago: string;
    totalItems: number = 0;
    totalFinal: number = 0;
    fecha: Date;
    detalles: Array<DetalleFactura>;

    constructor(letra: string, numero: number, fecha: Date){
        this.letra = letra;
        this.numero = numero;
        this.fecha = fecha;
        this.detalles = Array<DetalleFactura>();
    }
    addDetalleFactura(detalle: DetalleFactura){
        this.detalles.push(detalle);
    }

    setTipoPago(tipoPago: string){
        this.tipoPago = tipoPago;
        switch(tipoPago){
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
    }

    calcularTotalItems(){
        let monto: number = 0;
        this.detalles.forEach(detalle =>{
            monto += detalle.getSubtotal();
        });
        this.totalItems = monto;
    }
    calcularTotalFinal(){
        this.calcularTotalItems();
        let recargoMonto: number = this.totalItems * this.recargo;
        this.totalFinal = this.totalItems + recargoMonto;
    }
}