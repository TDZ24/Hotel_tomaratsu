import { Component } from '@angular/core';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  public habitacion1:Habitacion={
    nombre:"Habitacion Estelar de Primavera",
    foto:["https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img10.jpg?alt=media&token=813a0275-c6b4-473a-9bb5-342ff08046c7","https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img5.jpg?alt=media&token=ccae4559-79af-4739-af09-4f00e87f0518","https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img8.jpg?alt=media&token=62ffc535-4849-4e31-8989-8605fd519482"],
    descripcion:"Habitacion enfocada al descanso eterno",
    precioNoche: 100,
    cantidadMaxima:2
  }
  public habitacion2:Habitacion={
    nombre:"Habitacion Deluxe invernal",
    foto:["https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img10.jpg?alt=media&token=813a0275-c6b4-473a-9bb5-342ff08046c7","https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img5.jpg?alt=media&token=ccae4559-79af-4739-af09-4f00e87f0518","https://firebasestorage.googleapis.com/v0/b/hoteltomaratsutdz.appspot.com/o/img8.jpg?alt=media&token=62ffc535-4849-4e31-8989-8605fd519482"],
    descripcion:"Cabaña con sillon enfocado a todas las tecnicas del kamasutra y jacuzzi",
    precioNoche: 150,
    cantidadMaxima:3
  }

  public habitaciones:Habitacion[]=[this.habitacion1,this.habitacion2]

  public constructor(){
    console.log(this.habitacion1, this.habitacion2)
  }
}



