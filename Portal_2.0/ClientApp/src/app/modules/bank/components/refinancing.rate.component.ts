import { Component, OnInit } from '@angular/core';

import { RefinancingRateBankService } from '../../../services/bank/data.bank.refinancing.service';

import { RefinancingRate } from '../../../models/refinancing.rate.model';

import { IChart } from '../../../interfaces/chart.interface';

import { RefinancingRateViewModel } from '../view-models/refinancing.rate.view.model';


@Component({
  templateUrl: './refinancing.rate.component.html',
  providers: [RefinancingRateBankService]
})

export class RefinancingComponent implements OnInit, IChart {

  refinancingRateViewModel: RefinancingRateViewModel = new RefinancingRateViewModel();

  ngOnInit() {

    this.getTodayRate();
    this.getRates();
  }

  constructor(private dataService: RefinancingRateBankService) {
  }

  private getTodayRate(): void {

    this.dataService.getRefinancingRate(new Date()).subscribe((data) => {

      this.refinancingRateViewModel.refinancingRate = data[0] as RefinancingRate;

      this.refinancingRateViewModel.refinancingRate.date = new Date(this.refinancingRateViewModel.refinancingRate.date).toLocaleDateString();
    });
  }

  private getRates(): void {

    this.dataService.getDunamicRefinancingRate().subscribe((data: RefinancingRate[]) => {

      this.refinancingRateViewModel.refinancingRates = data;
      this.refinancingRateViewModel.chartData = this.addaptToChartData(data);
    });
  }

  addaptToChartData(array: RefinancingRate[]): Object {

    if (!array) {

      return;
    }

    array = array.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c < d ? -1 : c > d ? 1 : 0;
    }) as RefinancingRate[];

    let labels = [];
    let data = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(new Date(array[i].date).toLocaleDateString());
      data.push(array[i].value);
    }

    let result = {
      labels: labels,
      datasets: [
        {
          label: 'refinancing rate',
          data: data,
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }
      ]
    }

    return result;
  }
}
