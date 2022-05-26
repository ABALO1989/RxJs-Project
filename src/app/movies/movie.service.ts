import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, concat, forkJoin, map, merge, Observable, tap, throwError, withLatestFrom } from 'rxjs';

import { Iapi } from './movie';
import { BoxOfficeService } from '../boxOffice/boxOffice.service';
import {
  combineLatest,
  combineLatestInit,
} from 'rxjs/internal/observable/combineLatest';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'https://imdb-api.com/en/API/Top250Movies/k_dwqzf26o';

  constructor(
    private http: HttpClient,
    private boxOfficeService: BoxOfficeService
  ) {} //inyecto el servicio que voy a combinar en el constructor

  movies$ = this.http.get<Iapi>(this.moviesUrl)
  .pipe(
    tap(data => console.log('movies: ', JSON.stringify(data))),
    map((movies) => movies.items),
    map((movies) =>
      movies.map((movies) => ({
        ...movies,
        title: movies.title.toUpperCase(),
      }))
    ),
    catchError(this.handleError)
  );
  


  moviesWithBoxOffice$ = forkJoin([
    this.movies$,
    this.boxOfficeService.boxOffice$,
  ]).pipe(
    tap(data => console.log('Movies: ', JSON.stringify(data))),
    map(([movies, boxOffice]) =>
      movies.map((movies) => ({
        ...movies,
        worldwide: boxOffice.find(c => movies.id === c.id)?.worldwideLifetimeGross
      }))
    )
  );

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
