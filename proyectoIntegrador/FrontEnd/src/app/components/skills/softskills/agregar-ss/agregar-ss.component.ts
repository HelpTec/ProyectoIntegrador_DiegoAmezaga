import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/SoftSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills-service.service';

@Component({
  selector: 'app-agregar-ss',
  templateUrl: './agregar-ss.component.html',
  styleUrls: ['./agregar-ss.component.css']
})
export class AgregarSSComponent implements OnInit {
  nombreS: string = '';
  nivelS: number = null;
  iconoS: string = '';

constructor(private sSService : SoftSkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skill= new SoftSkills(this.nombreS, this.nivelS, this.iconoS);
    this.sSService.save(skill).subscribe(
      data=>{
        alert("Tarjeta agregada");
        this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])});
  }

}
