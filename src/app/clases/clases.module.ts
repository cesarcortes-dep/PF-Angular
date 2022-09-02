import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';
import { ClasesService } from './services/clases.service';
import { ClasesRoutingModule } from './clases-routing.module';

/*  */
import { SharedModule } from '../shared/shared.module';
/*  */



@NgModule({
  declarations: [
    ListaClasesComponent
  ],
  imports: [
    CommonModule, 
    ClasesRoutingModule,
    /*  */
    SharedModule
    /*  */
    
  ],
  providers:[
    ClasesService
  ]
})
export class ClasesModule { }
