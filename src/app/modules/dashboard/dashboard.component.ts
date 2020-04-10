import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AreaData } from 'src/app/shared/models/AreaData';
import { PieData } from 'src/app/shared/models/piedata';
import { Observable } from 'rxjs';

@Component({
  selector: 'db-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart$: Observable<AreaData[]>;
  cardCharts = [];
  pieChart$: Observable<PieData[]>;
  tableData = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.tableData = this.dashboardService.tableData();

    // this.dashboardService.bigChart().subscribe((data) => {
    //   this.bigChart = data;
    // });

    // using async pipes
    this.bigChart$ =  this.dashboardService.bigChart();
    this.cardCharts = this.dashboardService.cardCharts();

    // this.pieChart = this.dashboardService.pieCharts(); //traditional approach

    // using subscribe
    // this.dashboardService.pieChart().subscribe((data) => {
    //   this.pieChart = data;
    // });

    // using async pipes
    this.pieChart$ = this.dashboardService.pieChart();
  }

}
