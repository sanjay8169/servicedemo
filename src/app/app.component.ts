import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IronmanComponent } from './ironman/ironman.component';
import { SpidermanComponent } from './spiderman/spiderman.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,IronmanComponent,SpidermanComponent,MoviesComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicedemo';
  
}
