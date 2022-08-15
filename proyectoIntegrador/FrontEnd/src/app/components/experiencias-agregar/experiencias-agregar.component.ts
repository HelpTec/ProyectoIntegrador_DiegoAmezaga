import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencias-agregar',
  templateUrl: './experiencias-agregar.component.html',
  styleUrls: ['./experiencias-agregar.component.css']
})
export class ExperienciasAgregarComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  tiempoE: string = '';

  constructor(private sExperiencia : SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const exp= new Experiencia(this.nombreE, this.descripcionE, this.tiempoE);
    this.sExperiencia.save(exp).subscribe(
      data=>{
        alert("Tarjeta agregada");
        this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])});
  }

}
