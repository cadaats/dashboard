import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'db-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions =  {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 80
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      tooltip: {
          split: true,
          outside: true
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      legend: {

      },
     series: [{
       data: this.data
     }]
  };
    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
  }
}
