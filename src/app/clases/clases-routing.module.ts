import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';


const routes: Routes = [
  {
    path: 'clases', children: 
    [{ path: 'lista-clases', component: ListaClasesComponent }]
    /* si hay que agregar el metodo de cancelar clases, se tiene que hacer el compo y enrutar*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule {}
