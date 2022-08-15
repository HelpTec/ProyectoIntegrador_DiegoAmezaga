import { Component, OnInit } from '@angular/core';
import { SoftSkills } from 'src/app/model/SoftSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
skill: SoftSkills[] = [];

  constructor(private softSkillsService: SoftSkillsService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.softSkillsService.lista().subscribe(data => {this.skill = data;})
  }

  borrar(id?: number){
    if(id != undefined){
      this.softSkillsService.delete(id).subscribe(data=>
        {this.cargarSkill();
        },err => {
          alert("no se pudo borrar");
        }
      )
    }
  }
}
