export class Detalle{
    kmSalida: number = 0;
    kmRegreso: number = 0;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;

    constructor(kmSalida: number, kmRegreso: number){
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
    }
}