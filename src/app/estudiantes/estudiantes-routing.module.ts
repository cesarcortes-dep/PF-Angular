import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';


const routes: Routes = [
  {
    path: 'estudiantes', children: 
    [{  path: 'lista-estudiantes', component: ListaEstudiantesComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
