import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { PieData } from '../../models/piedata';
import { Datum } from '../../models/datum';

@Component({
  selector: 'db-widgets-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, OnChanges {
  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data: PieData[];
  updateFlag = false;
  constructor() { }

  ngOnInit(): void {
    this.bindChartData(this.data);
    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }


  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.data !== 'undefined') {
      const change = changes.data;
      if (!change.isFirstChange()) {
        console.log('change detected in Pie data: ');
        this.bindChartData(change.currentValue);
        // console.log('Pie Chart Options');
        // console.log(this.chartOptions);
      }
    }
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
      series: chartData[0]
    };

    console.log('Pie Chart Options');
    console.log(this.chartOptions);
  }

}
