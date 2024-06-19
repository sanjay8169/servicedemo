import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieservicesService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/movies";

  private ms = new Subject();
  ms$ = this.ms.asObservable();

  getmovies():any{
    return this.http.get(this.url);
  }






}
