import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { BigChart } from 'src/app/shared/models/bigchart';

@Component({
  selector: 'db-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart: BigChart[];
  cardCharts = [];
  pieChart = [];
  tableData = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.tableData = this.dashboardService.tableData();
    // this.bigChart = this.dashboardService.bigChart();
    // console.log(this.bigChart);
    this.dashboardService.bigChart().subscribe((data) => {
      // for (const item of data) {
      //   // const element = data[index];
      //   console.log(item.name);
      // }
      // console.log(data);
      this.bigChart = data;
    });
    this.cardCharts = this.dashboardService.cardCharts();
    this.pieChart = this.dashboardService.pieChart();
  }

}
