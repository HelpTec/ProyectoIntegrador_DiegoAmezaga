import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciasAgregarComponent } from './components/experiencias-agregar/experiencias-agregar.component';
import { ExperienciasEditarComponent } from './components/experiencias-editar/experiencias-editar.component';
import { EstudiosCrearComponent } from './components/estudios/estudios-crear/estudios-crear.component';
import { EstudiosEditarComponent } from './components/estudios/estudios-editar/estudios-editar.component';
import { AgregarHSComponent } from './components/skills/hardskills/agregar-hs/agregar-hs.component';
import { EditarHSComponent } from './components/skills/hardskills/editar-hs/editar-hs.component';
import { AgregarSSComponent } from './components/skills/softskills/agregar-ss/agregar-ss.component';
import { EditarSSComponent } from './components/skills/softskills/editar-ss/editar-ss.component';
import { HardskillsComponent } from './components/skills/hardskills/hardskills/hardskills.component';
import { SoftskillsComponent } from './components/skills/softskills/softskills/softskills.component';
import { AgregarproyectoComponent } from './components/proyecto/agregarproyecto/agregarproyecto.component';
import { EditarproyectoComponent } from './components/proyecto/editarproyecto/editarproyecto.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AboutComponent,
    ExperienciasComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciasAgregarComponent,
    ExperienciasEditarComponent,
    EstudiosCrearComponent,
    EstudiosEditarComponent,
    AgregarHSComponent,
    EditarHSComponent,
    AgregarSSComponent,
    EditarSSComponent,
    HardskillsComponent,
    SoftskillsComponent,
    AgregarproyectoComponent,
    EditarproyectoComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
