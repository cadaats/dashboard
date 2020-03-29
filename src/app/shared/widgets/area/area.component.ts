import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { BigChart } from '../../models/bigchart';


@Component({
  selector: 'db-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnChanges {

  chartOptions: {};
  @Input() data: BigChart[];
  updateFlag = false;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.data !== 'undefined') {
      const change = changes.data;
      if (!change.isFirstChange()) {
        console.log('change detected in area data: ');
        this.bindChartData(change.currentValue);
        console.log(this.chartOptions);
      }
    }
  }

  bindChartData(chartData: any) {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: chartData
    };
  }
}
