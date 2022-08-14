import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudioService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  est: Estudios[] = [];

  constructor(private estudiosService: EstudioService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEstudio():void{
    this.estudiosService.lista().subscribe(data => {this.est = data;})
  }

  borrar(id?: number){
    if(id != undefined){
      this.estudiosService.delete(id).subscribe(data=>
        {this.cargarEstudio();
        },err => {
          alert("no se pudo borrar");
        }
      )
    }
  }

}
