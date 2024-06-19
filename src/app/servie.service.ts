import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { missiontype } from './types/mission.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServieService {

  // private missions : string[] = ["save gujrat","destroy pakistan"];

  private missionSubject = new BehaviorSubject<any>([]);
   //missions : missiontype[] = 

//   private missionSubject = new BehaviorSubject<any>([
//     {
//       mname : "Save Taj" ,
//       location : "india"
//     },
//     {
//     mname: 'destroy karachi',
//     location: 'pakistan'
//     }
// ]);


   missionPublissor = this.missionSubject.asObservable();


constructor(private missionClient : HttpClient) { }

  url : string = "http://localhost:3000/missions";

 getmissions():any {  
  this.missionClient.get(this.url);
  return this.missionClient.get(this.url);
 }


  addmissions(a:any):Observable<any>{    
    return this.missionClient.post(this.url,a).pipe( map(() => this.missionSubject.next("")));
  }

  removemissions(id:number):Observable<any>{
    return this.missionClient.delete(this.url+"/"+id);
  }


}
