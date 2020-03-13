import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'db-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cardCharts = [];
  pieChart = [];
  tableData = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.tableData = this.dashboardService.tableData();
    this.bigChart = this.dashboardService.bigChart();
    this.cardCharts = this.dashboardService.cardCharts();
    this.pieChart = this.dashboardService.pieChart();
  }

}
