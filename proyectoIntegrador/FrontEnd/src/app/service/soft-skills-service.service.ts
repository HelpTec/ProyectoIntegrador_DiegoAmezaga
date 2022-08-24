import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills} from '../model/SoftSkills'

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
estUrl = 'https://portfoliobckend.herokuapp.com/sSkills'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<SoftSkills[]>{
    return this.httpClient.get<SoftSkills[]>(this.estUrl + '/lista');
  }

  public detail(id:number):Observable<SoftSkills>{
    return this.httpClient.get<SoftSkills>(this.estUrl+ `/detail/${id}`);
  }

  public save(skills: SoftSkills):Observable<any>{
    return this.httpClient.post<any>(this.estUrl+'/create',skills);
  }

  public update(id:number, skills: SoftSkills):Observable<any>{
    return this.httpClient.put<any>(this.estUrl+`/update/${id}`, skills);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.estUrl+`/delete/${id}`);
  }
}