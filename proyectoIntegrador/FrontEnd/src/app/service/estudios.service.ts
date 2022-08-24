import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  expUrl = 'https://portfoliobckend.herokuapp.com/estu'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.expUrl + '/lista');
  }

  public detail(id:number):Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.expUrl+ `/detail/${id}`);
  }

  public save(estudios: Estudios):Observable<any>{
    return this.httpClient.post<any>(this.expUrl+'/create',estudios);
  }

  public update(id:number, estudios: Estudios):Observable<any>{
    return this.httpClient.put<any>(this.expUrl+`/update/${id}`, estudios);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expUrl+`/delete/${id}`);
  }
}