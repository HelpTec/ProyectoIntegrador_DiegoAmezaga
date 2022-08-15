import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/model/HardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {
  skill: HardSkills[] = [];

  constructor(private hardSkillsService: HardSkillsService, private tokenService: TokenService) { }

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
    this.hardSkillsService.lista().subscribe(data => {this.skill = data;})
  }

  borrar(id?: number){
    if(id != undefined){
      this.hardSkillsService.delete(id).subscribe(data=>
        {this.cargarSkill();
        },err => {
          alert("no se pudo borrar");
        }
      )
    }
  }
}
