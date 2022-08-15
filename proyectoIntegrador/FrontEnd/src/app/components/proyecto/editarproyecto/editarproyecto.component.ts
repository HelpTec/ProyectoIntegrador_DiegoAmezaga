import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
proy: Proyecto = null;

  constructor(private proyectoService: ProyectosService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data=>{
        this.proy=data;
      }, err =>{
         alert("Algo falló al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proy).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}