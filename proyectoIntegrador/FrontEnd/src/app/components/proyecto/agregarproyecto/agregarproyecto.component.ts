import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregarproyecto',
  templateUrl: './agregarproyecto.component.html',
  styleUrls: ['./agregarproyecto.component.css']
})
export class AgregarproyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imagenP: string = '';
  urlP: string = '';

  constructor(private proyectoService : ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skill= new Proyecto(this.nombreP, this.descripcionP, this.imagenP, this.urlP);
    this.proyectoService.save(skill).subscribe(
      data=>{
        alert("Proyecto agregado");
        this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])});
  }

}