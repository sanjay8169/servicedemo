import { Component, OnInit } from '@angular/core';
import { ServieService } from '../servie.service';
import { missiontype } from '../types/mission.type';

@Component({
  selector: 'app-spiderman',
  standalone: true,
  imports: [],
  templateUrl: './spiderman.component.html',
  styleUrl: './spiderman.component.css'
})
export class SpidermanComponent implements OnInit{

  missions : any;
  constructor(private missionService : ServieService){

  }

  ngOnInit():void {
    this.getmissions();
    this.missionService.missionPublissor.subscribe((data)=> 
      this.getmissions()
    )
  }

  getmissions():void{
    this.missionService.getmissions().subscribe((data : any) => {

      this.missions = data;
     })
  };

  removemission(id: number):void{
     this.missionService.removemissions(id).subscribe(() =>
      this.getmissions()

    )
  }
}
