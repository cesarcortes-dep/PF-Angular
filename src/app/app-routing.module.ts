import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfazComponent } from './core/components/interfaz/interfaz.component';
import { LoginComponent } from './core/components/login/login.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'auth', loadChildren:() => import('./auth/auth.module').then((m) => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
