import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { EstudiantesService } from './services/estudiantes.service';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";



@NgModule({
  declarations: [
    ListaEstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MatTableModule,
    MatDialogModule

  ],providers:[
    EstudiantesService
  ]
})
export class EstudiantesModule { }
