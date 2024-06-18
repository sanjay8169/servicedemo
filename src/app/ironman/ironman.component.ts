import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServieService } from '../servie.service';
import { missiontype } from '../types/mission.type';

@Component({
  selector: 'app-ironman',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ironman.component.html',
  styleUrl: './ironman.component.css'
})
export class IronmanComponent {
  myForm: FormGroup=new FormGroup({
    id: new FormControl(''),
    mission : new FormControl('')
  });

  constructor(private fb: FormBuilder,private missionService : ServieService) {}


  ngOnInit() {
    this.myForm = this.fb.group({
      id: ['', [Validators.required,Validators.required]],
      mission: ['', [Validators.required,Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    let mission : any = {
      id: form.value.id,
      mission: form.value.mission
    }
   this.missionService.addmissions(mission).subscribe((b) =>
    {
      b.next(mission)
    }
  )
  
  }
} 
