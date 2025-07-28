import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routesApi } from './rout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private rout!: string;
  
  constructor(private http: HttpClient){
    this.rout = routesApi.gitHelp;
  }

  gitHelp(): Observable<any>{
    return this.http.get(this.rout)
  }
}
