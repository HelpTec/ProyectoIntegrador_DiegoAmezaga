import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkills } from '../model/HardSkills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
estUrl = 'http://localhost:8080/hSkills'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<HardSkills[]>{
    return this.httpClient.get<HardSkills[]>(this.estUrl + '/lista');
  }

  public detail(id:number):Observable<HardSkills>{
    return this.httpClient.get<HardSkills>(this.estUrl+ `/detail/${id}`);
  }

  public save(skills: HardSkills):Observable<any>{
    return this.httpClient.post<any>(this.estUrl+'/create',skills);
  }

  public update(id:number, skills: HardSkills):Observable<any>{
    return this.httpClient.put<any>(this.estUrl+`/update/${id}`, skills);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.estUrl+`/delete/${id}`);
  }
}