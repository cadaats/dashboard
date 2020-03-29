import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AreaData } from 'src/app/shared/models/AreaData';
import { PieData } from 'src/app/shared/models/piedata';

@Component({
  selector: 'db-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart: AreaData[];
  cardCharts = [];
  pieChart: PieData[];
  tableData = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.tableData = this.dashboardService.tableData();

    this.dashboardService.bigChart().subscribe((data) => {
      this.bigChart = data;
    });
    this.cardCharts = this.dashboardService.cardCharts();

    this.dashboardService.pieChart().subscribe((data) => {
      this.pieChart = data;
    });
  }

}
