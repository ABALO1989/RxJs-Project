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
  listFilter: string = '';
  listFilterRanking: string = '';
  imageWidth: number = 80;
  options = ['Greater than 8B', 'Between 5 - 8', 'Less than 5']

  public movies$: Observable<Imovie[]> | undefined = this.movieService.movie$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  )

  constructor(private movieService: MovieService) {
  }


}


