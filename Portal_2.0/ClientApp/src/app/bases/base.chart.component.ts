import { Component, Input } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'chart-form',
  templateUrl: './base.chart.component.html'
})

export class ChartComponent {

  chart: Chart;

  @Input() inputData: Object;

  ngOnChanges() {

    let data = this.inputData as Chart.ChartData;

    if (!this.chart) {

      this.createChart(data);
    } else {

      this.removeData(this.chart);
      this.addData(this.chart, data);
    }
  }

  private createChart(data: Chart.ChartData) {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }

  private addData(chart: Chart, data: Chart.ChartData) {

    chart.data = data;

    chart.update();
  }

  private removeData(chart: Chart) {

    chart.data.labels.pop();

    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    chart.update();
  }
}
