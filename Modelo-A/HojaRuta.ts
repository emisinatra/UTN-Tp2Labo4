import { Detalle } from "./Detalle";

export class HojaRuta{
    fecha: Date;
    numero: number;
    detalles = Array<Detalle>();

    constructor(fecha:Date, numero:number){
        this.fecha = fecha;
        this.numero = numero;
    }

    addDetalle(detalle: Detalle){
        this.detalles.push(detalle);
    }

    calcularTotalKilometros(): number{
        let total: number = 0;
        this.detalles.forEach(element => {
            total += element.kmRegreso - element.kmSalida;
        });
        return total;
    }
}