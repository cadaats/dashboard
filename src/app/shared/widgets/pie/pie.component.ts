import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { PieData } from '../../models/piedata';

@Component({
  selector: 'db-widgets-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data: PieData[];
  updateFlag = false;
  constructor() { }

  ngOnInit(): void {
    HC_exporting(Highcharts);

    this.bindChartData(this.data);

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }

  bindChartData(chartData: any) {
    console.log('Binding Chart Data');
    console.log(this.data);
    this.chartOptions =  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Random Data, 2020'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: JSON.parse(JSON.stringify(chartData))
    };
  }

}
