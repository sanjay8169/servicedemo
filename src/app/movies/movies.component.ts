import { Component } from '@angular/core';
import { MovieservicesService } from '../movieservices.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  constructor(private ms : MovieservicesService ){

  }

  movies : any;

  ngOnInit(){
    this.getmovies();
  }

  getmovies():any{
    return this.ms.getmovies().subscribe((data:string[])=>{
      this.movies = data;
    })
  }
}
