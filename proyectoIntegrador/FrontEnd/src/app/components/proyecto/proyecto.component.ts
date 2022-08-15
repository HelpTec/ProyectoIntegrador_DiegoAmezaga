import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
proy: Proyecto[] = [];

  constructor(private proyectoService: ProyectosService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.proyectoService.lista().subscribe(data => {this.proy = data;})
  }

  borrar(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(data=>
        {this.cargarExperiencia();
        },err => {
          alert("no se pudo borrar");
        }
      )

    }
  }

}
