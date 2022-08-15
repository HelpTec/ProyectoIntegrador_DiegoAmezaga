import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/SoftSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills-service.service';

@Component({
  selector: 'app-editar-ss',
  templateUrl: './editar-ss.component.html',
  styleUrls: ['./editar-ss.component.css']
})
export class EditarSSComponent implements OnInit {
skill: SoftSkills = null;

  constructor(private sSkillsService: SoftSkillsService,
    private activatedRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkillsService.detail(id).subscribe(
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
    this.sSkillsService.update(id, this.skill).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Algo falló al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
