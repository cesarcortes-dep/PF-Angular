import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  constructor() {}

  obtenerClases() {
    return [
      {nombreProfesor: 'Beatriz Peris', comision: '32362', horario:'Martes y Jueves 18:30 a 20:30'},
      {nombreProfesor: 'Marc Santiago', comision: '32340' , horario:'Lunes y Míercoles 18:30 a 20:30'},
      {nombreProfesor: 'Xavier Franco', comision: '32369' , horario:'Sábado 9:30 a 14:00'},
      {nombreProfesor: 'Azucena Garca', comision: '32380' , horario:'Martes y Jueves 17:30 a 19:30'},
      {nombreProfesor: 'Denis Cerda', comision: '32356' , horario:'Lunes y Míercoles 18:30 a 20:30'},
      {nombreProfesor: 'Florentino Pellicer', comision: '32321' , horario:'Martes y Jueves 08:00 a 10:00'},

    ];
  }
}
