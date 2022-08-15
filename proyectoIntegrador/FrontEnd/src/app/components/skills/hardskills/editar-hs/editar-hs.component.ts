import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/HardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills-service.service';


@Component({
  selector: 'app-editar-hs',
  templateUrl: './editar-hs.component.html',
  styleUrls: ['./editar-hs.component.css']
})
export class EditarHSComponent implements OnInit {
  skill: HardSkills = null;

  constructor(private hSkillsService: HardSkillsService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hSkillsService.detail(id).subscribe(
      data=>{
        this.skill=data;
      }, err =>{
         alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hSkillsService.update(id, this.skill).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
