import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IronmanComponent } from './ironman/ironman.component';
import { SpidermanComponent } from './spiderman/spiderman.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,IronmanComponent,SpidermanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicedemo';
  
}
