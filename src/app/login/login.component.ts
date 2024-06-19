import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials : any = [
    {
      username : "admin",
      password : "admin",
      role : "admin"
    },
    {
      username : "sanjay",
      password : "123",
      role : "user"
    }
  ];


  constructor(private router : Route){

  }

  username : string = "";
  password : string = "";

  checkdetails():any{

    let details = this.credentials.filter((a : any)=> {
      if(a.username == this.username && a.password == this.password){
        // console.log(a.role)
        return a;
      }
    }).map((a:any)=> {
      console.log(a.role);
      this.router.navigate(['/about/feedback']);
       return a
      });

    if(details.length > 0){
      alert("enter correct password");
    }


  }

  

}
