import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosCrearComponent } from './components/estudios/estudios-crear/estudios-crear.component';
import { EstudiosEditarComponent } from './components/estudios/estudios-editar/estudios-editar.component';
import { ExperienciasAgregarComponent } from './components/experiencias-agregar/experiencias-agregar.component';
import { ExperienciasEditarComponent } from './components/experiencias-editar/experiencias-editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'agregarexp', component: ExperienciasAgregarComponent},
  {path:'agregarest', component: EstudiosCrearComponent},
  {path: 'editarexp/:id', component: ExperienciasEditarComponent},
  {path: 'editarest/:id', component: EstudiosEditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
