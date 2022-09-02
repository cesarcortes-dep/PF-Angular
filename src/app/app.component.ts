import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core/services/core.service';
import { Sesion } from './modules/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

sesion$!: Observable<Sesion>
  constructor(
    private core: CoreService)
    {}

    ngOnInit(): void {
      this.sesion$ = this.core.obtenerSesion()
    }
}
