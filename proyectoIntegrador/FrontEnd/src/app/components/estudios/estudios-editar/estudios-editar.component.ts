import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudioService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios-editar',
  templateUrl: './estudios-editar.component.html',
  styleUrls: ['./estudios-editar.component.css']
})
export class EstudiosEditarComponent implements OnInit {
  est: Estudios = null;

  constructor(private estudioService: EstudioService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioService.detail(id).subscribe(
      data=>{
        this.est=data;
      }, err =>{
         alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioService.update(id, this.est).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
