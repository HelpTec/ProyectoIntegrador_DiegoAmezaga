import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencias-editar',
  templateUrl: './experiencias-editar.component.html',
  styleUrls: ['./experiencias-editar.component.css']
})
export class ExperienciasEditarComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.expLab=data;
      }, err =>{
         alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
