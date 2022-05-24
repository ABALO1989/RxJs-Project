import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Iapi, Imovie  } from './movie';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'https://ingenia.app/aleja/movies.json';

  constructor(private http: HttpClient) { }

  movie$ = this.http.get<Iapi>(this.moviesUrl)
  .pipe (
    tap(data => console.log('Movies: ', JSON.stringify(data))),
    map (response => response.items),
    catchError(this.handleError)
  )

  
    
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


  