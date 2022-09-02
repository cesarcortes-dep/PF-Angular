/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
/* AUTH SERVICE */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, SubjectLike } from 'rxjs';
import { Sesion } from 'src/app/modules/sesion';
import { Usuario } from 'src/app/modules/usuario';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  iniciarSesion(usuario: Usuario) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuario: {
        id: usuario.id,
        usuario: usuario.usuario,
        contrasena: usuario.contrasena,
        admin: usuario.admin
      },
    };
    this.sesionSubject.next(sesion);
  }
  cerrarSesion(){
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubject.next(sesion)
  }

  obtenerSesion(){
    return this.sesionSubject.asObservable();
  }
}
