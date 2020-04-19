import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AreaData } from '../shared/models/AreaData';
import { PieData } from '../shared/models/piedata';
import { TableData } from '../shared/models/tabledata';
import { CardData } from '../shared/models/carddata';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // Move from procedural to declarative pattern
  areaData$ = this.httpClient.get<AreaData[]>('http://localhost:59854/api/dashboard/big')
            .pipe(
                tap(data => console.log('Area chart data received: ', JSON.stringify(data))),
                catchError(this.handleError)
              );

  // Move from procedural to declarative pattern
  pieData$ =  this.httpClient.get<PieData[]>('http://localhost:59854/api/dashboard/pie')
              .pipe(
                tap(data => console.log('Area chart data received: ', JSON.stringify(data))),
                catchError(this.handleError)
              );

  tableData$ = this.httpClient.get<TableData[]>('http://localhost:59854/api/dashboard/table')
  .pipe(
    tap(data => console.log('Table data received: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  cardData$ = this.httpClient.get<CardData[]>('http://localhost:59854/api/dashboard/card')
  .pipe(
    tap(data => console.log('Card data received: ', JSON.stringify(data))),
    catchError(this.handleError)
  );
  constructor(private httpClient: HttpClient) { }

  handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client side or network error occured
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // Backend returned an error
      errorMessage = `Backend returned an error, code ${err.status}: ${err.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
