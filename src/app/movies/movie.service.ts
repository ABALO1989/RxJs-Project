import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';

import { Iapi } from './movie';
import { BoxOfficeService } from '../boxOffice/boxOffice.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

 
  private moviesUrl = 'https://imdb-api.com/en/API/Top250Movies/k_dwqzf26o';

  constructor(private http: HttpClient, 
              private boxOfficeService: BoxOfficeService) {} //inyecto el servicio que voy a combinar en el constructor

  movies$ = this.http.get<Iapi>(this.moviesUrl)
  .pipe(
    map((movies) => movies.items),
    map((movies) =>
      movies.map((movies) => ({
        ...movies,
        fullTitle: movies.fullTitle.toUpperCase(),
     
      }))
    ),
    catchError(this.handleError)
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
