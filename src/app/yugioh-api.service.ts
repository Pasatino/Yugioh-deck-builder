import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import type { Card } from './types/card.model';

@Injectable({
  providedIn: 'root'
})
export class YugiohApiService {
  
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  
  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<{ data: Card[] }>(this.apiUrl)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(()=> new Error('Something went wrong; please try again later.'));
  }
}
