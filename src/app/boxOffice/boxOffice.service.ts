import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IapiBox } from './boxOffice';



@Injectable({
  providedIn: 'root',
})
export class BoxOfficeService {
  private boxOfficeUrl =
    'https://imdb-api.com/en/API/BoxOfficeAllTime/k_dwqzf26o';

  constructor(private http: HttpClient) {}

  boxOffice$ = this.http.get<IapiBox>(this.boxOfficeUrl)
    .pipe(
    tap(),
      map((movies) => movies.items),
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
