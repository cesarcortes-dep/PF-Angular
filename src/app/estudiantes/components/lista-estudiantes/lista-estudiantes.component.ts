import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Estudiante {
  nombreEstudiante: string;
  apellidoEstudiante: string;
  pais: string;
}

const ELEMENT_DATA: Estudiante[] = 
[
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },
  {
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Manuel',
    pais:'Mexico'
  },

]

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  columnas: string[] = [
    'nombreEstudiante',
    'apellidoEstudiante',
    'pais'
  ];
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Estudiante>;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
