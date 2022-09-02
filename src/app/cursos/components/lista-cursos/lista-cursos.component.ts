import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CursosService } from 'src/app/core/services/cursos.service';
import { Curso } from 'src/app/modules/curso';



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;

  constructor(
    private dialog: MatDialog,
    private cursoService: CursosService) {

    }

  ngOnInit(): void {
  this.cursos$ = this.cursoService.obtenerCursos();
  }
}
