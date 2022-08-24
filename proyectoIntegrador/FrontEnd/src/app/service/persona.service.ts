import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  URL = 'https://portfoliobckend.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+'traer/perfil')
  }
  public update(pers: persona):Observable<any>{
    return this.httpClient.put<any>(this.URL+`editar/1`, pers);
  }
}
