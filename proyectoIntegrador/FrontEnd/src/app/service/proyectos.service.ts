import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyUrl = 'https://portfoliobckend.herokuapp.com/proy'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyUrl + '/lista');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyUrl+ `/detail/${id}`);
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.proyUrl+'/crear',proyecto);
  }

  public update(id:number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.proyUrl+`/editar/${id}`, proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.proyUrl+`/borrar/${id}`);
  }
}
  