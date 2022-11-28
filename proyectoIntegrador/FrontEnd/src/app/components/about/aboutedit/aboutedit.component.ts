import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-aboutedit',
  templateUrl: './aboutedit.component.html',
  styleUrls: ['./aboutedit.component.css']
})
export class AbouteditComponent implements OnInit {
pers: persona = null;

  constructor(private personaService: PersonaService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(
      data=>{
        this.pers=data;
      }, err =>{
         alert("Algo falló al cargar el perfil");
        this.router.navigate(['']);
      }
    )
  }

  actualizar(): void {
    this.personaService.update(this.pers).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }
}
