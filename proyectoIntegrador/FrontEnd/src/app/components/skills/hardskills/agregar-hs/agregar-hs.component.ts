import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/model/HardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills-service.service';

@Component({
  selector: 'app-agregar-hs',
  templateUrl: './agregar-hs.component.html',
  styleUrls: ['./agregar-hs.component.css']
})
export class AgregarHSComponent implements OnInit {
  nombreS: string = '';
  nivelS: number = null;
  iconoS: string = '';

  constructor(private hSService : HardSkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skill= new HardSkills(this.nombreS, this.nivelS, this.iconoS);
    this.hSService.save(skill).subscribe(
      data=>{
        alert("Tarjeta agregada");
        this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])});
  }

}

