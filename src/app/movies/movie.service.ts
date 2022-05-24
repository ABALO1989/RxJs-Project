import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Iapi } from './movie';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'https://imdb-api.com/en/API/Top250Movies/k_dwqzf26o';
  
  // headers = new HttpHeaders()
  // .set('X-RapidAPI-Host','usa-jobs-for-it.p.rapidapi.com')
  // .set('X-RapidAPI-Key','7bed4810b1mshaf7ff9fd2b3bc9fp16d2e4jsnba4a06b499a1')


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


  