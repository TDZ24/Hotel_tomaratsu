export interface Reservas{
    nombreCliente:string,
    apellidoCliente:string,
    telefono:number,
    fechaInicial:Date,
    fechaFinal:Date,
    cantidadPersona:number,
    idHabitacion:string,
    costoReserva?:number

}