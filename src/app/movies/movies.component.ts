import { Component } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { MovieService } from './movie.service';
import { Imovie } from './movie';

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
 

  public movies$: Observable<Imovie[]> | undefined = this.movieService.movies$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  
  constructor(private movieService: MovieService) {
  }


}


