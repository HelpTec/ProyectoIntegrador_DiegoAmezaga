import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosCrearComponent } from './components/estudios/estudios-crear/estudios-crear.component';
import { EstudiosEditarComponent } from './components/estudios/estudios-editar/estudios-editar.component';
import { ExperienciasAgregarComponent } from './components/experiencias-agregar/experiencias-agregar.component';
import { ExperienciasEditarComponent } from './components/experiencias-editar/experiencias-editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarproyectoComponent } from './components/proyecto/agregarproyecto/agregarproyecto.component';
import { EditarproyectoComponent } from './components/proyecto/editarproyecto/editarproyecto.component';
import { AgregarHSComponent } from './components/skills/hardskills/agregar-hs/agregar-hs.component';
import { EditarHSComponent } from './components/skills/hardskills/editar-hs/editar-hs.component';
import { AgregarSSComponent } from './components/skills/softskills/agregar-ss/agregar-ss.component';
import { EditarSSComponent } from './components/skills/softskills/editar-ss/editar-ss.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'agregarss', component: AgregarSSComponent},
  {path: 'editarss/:id', component: EditarSSComponent},
  {path:'agregarproy', component: AgregarproyectoComponent},
  {path: 'editarproy/:id', component: EditarproyectoComponent},
  {path:'agregarhs', component: AgregarHSComponent},
  {path: 'editarhs/:id', component: EditarHSComponent},
  {path:'agregarexp', component: ExperienciasAgregarComponent},
  {path:'agregarest', component: EstudiosCrearComponent},
  {path: 'editarexp/:id', component: ExperienciasEditarComponent},
  {path: 'editarest/:id', component: EstudiosEditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
