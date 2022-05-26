import { Component } from '@angular/core';
import { catchError, EMPTY, merge, Observable } from 'rxjs';
import { MovieService } from './movie.service';
import { Imovie } from './movie';
import { BoxOfficeService } from '../boxOffice/boxOffice.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})

export class MoviesComponent {
  title: string = 'movie List';
  errorMessage: string ='';
  public listFilter: string = '';
  //selectedRanking: string = '';
  imageWidth: number = 80;
 

  movies$ = this.movieService.moviesWithBoxOffice$/////importanteeee asociar el observable nuveo de la cmbinacion
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  

  
  constructor(private movieService: MovieService) {
  }


}


