export class Articulo{
    codigo: number;
    denominacion: string;
    precio: number = 0;
    unidadMedida: string;

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: string){
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}