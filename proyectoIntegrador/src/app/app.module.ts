import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { RsocialesComponent } from './components/rsociales/rsociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    RsocialesComponent,
    BannerComponent,
    AboutComponent,
    ExperienciasComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
