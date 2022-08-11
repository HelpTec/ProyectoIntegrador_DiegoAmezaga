import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciasAgregarComponent } from './components/experiencias-agregar/experiencias-agregar.component';
import { ExperienciasEditarComponent } from './components/experiencias-editar/experiencias-editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'agregarexp', component: ExperienciasAgregarComponent},
  {path: 'editarexp/:id', component: ExperienciasEditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
