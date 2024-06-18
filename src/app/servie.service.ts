import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { missiontype } from './types/mission.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServieService {

  // private missions : string[] = ["save gujrat","destroy pakistan"];

  //private missionSubject = new BehaviorSubject<string[]>(["save gujrat","destroy pakistan"]);
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


//   missionSubscriber = this.missionSubject.asObservable();


constructor(private missionClient : HttpClient) { }

  url : string = "http://localhost:3000/missions";
 getmissions():Observable<any> {
  return this.missionClient.get(this.url);
 }


  addmissions(a:any):Observable<any>{

    // let newmissions : missiontype[] = [...this.missionSubject.value,a];
    // this.missionSubject.next(newmissions);
    // console.log(this.missionSubject.value)
    return this.missionClient.post(this.url,a)

  }

  removemissions(id:number):Observable<any>{
    // let newmissions : missiontype[] = [...this.missionSubject.value];

    // newmissions.splice(id,1);

    // this.missionSubject.next(newmissions);  

    return this.missionClient.delete(this.url+"/"+id);
  }


}
