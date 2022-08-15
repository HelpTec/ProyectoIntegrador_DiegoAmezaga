import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudioService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios-crear',
  templateUrl: './estudios-crear.component.html',
  styleUrls: ['./estudios-crear.component.css']
})
export class EstudiosCrearComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  tiempoE: string = '';

  constructor(private estudioService : EstudioService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const est= new Estudios(this.nombreE, this.descripcionE, this.tiempoE);
    this.estudioService.save(est).subscribe(
      data=>{
        alert("Tarjeta agregada");
        this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])});
  }

}
