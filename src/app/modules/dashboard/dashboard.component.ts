import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'db-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  // cardCharts = [];
  // tableData = [];
  errorMessage: string;

  bigChart$ =  this.dashboardService.areaData$
                    .pipe(
                        catchError(err => {
                          this.errorMessage = err;
                          console.log(this.errorMessage);
                          return EMPTY; // Inorder for observable to terminate normally, an EMPTY or a default object is to be returned.
                        })
                      );

    pieChart$ = this.dashboardService.pieData$
              .pipe(
                catchError(err => {
                  this.errorMessage = err;
                  return EMPTY;
                })
              );

    tableData$ = this.dashboardService.tableData$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    cardData$ = this.dashboardService.cardData$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  constructor(private dashboardService: DashboardService) { }

  // ngOnInit(): void {
  //   // this.tableData = this.dashboardService.tableData();

  //   // this.dashboardService.bigChart().subscribe((data) => {
  //   //   this.bigChart = data;
  //   // });

  //   //

  //   // this.cardCharts = this.dashboardService.cardCharts();

  //   // this.pieChart = this.dashboardService.pieCharts(); //traditional approach

  //   // using subscribe
  //   // this.dashboardService.pieChart().subscribe((data) => {
  //   //   this.pieChart = data;
  //   // });
  // }

}
