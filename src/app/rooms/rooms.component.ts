import { Component } from '@angular/core';
import { Habitacion } from '../interfaces/Habitacion';
import { HabitacionesService } from '../services/habitaciones.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  public habitaciones:Habitacion[]=[]

  public constructor(public servicio:HabitacionesService){

    this.servicio.buscarHabitaciones()
    .subscribe((respuesta)=>{
      this.habitaciones=respuesta.haitaciones
      console.log(respuesta)
    })
  }
}



