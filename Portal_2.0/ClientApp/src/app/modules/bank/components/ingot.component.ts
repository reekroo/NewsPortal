import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankIngotService } from '../../../services/bank/data.bank.ingots.service';

import { Ingot } from '../../../models/ingot.model';
import { IngotPrice } from '../../../models/ingot.price.model';

import { IChart } from '../../../interfaces/chart.interface';

import { IngotViewModel } from '../view-models/ingot.view.model';

@Component({
  templateUrl: './ingot.component.html',
  styleUrls: ['../../../../assets/styles/bank/ingots.less'],
  providers: [BankIngotService]
})

export class MetalComponent implements OnInit, IChart {

  ingotViewModel: IngotViewModel = new IngotViewModel();

  ngOnInit() {

    this.getMetals();
  }

  constructor(private dataService: BankIngotService) {
  }

  getMetals(): void {

    this.dataService.getIngots().subscribe((data: Ingot[]) => { this.ingotViewModel.metals = data; });
  }

  getRate(id: number): void {

    this.dataService.getIngotPriceById(id, new Date()).subscribe((data: IngotPrice[]) => {

      this.ingotViewModel.ingotsRate = data;
      this.ingotViewModel.showDefault = false;
    });

    this.getChart(id, 0);
  }

  getChart(id: number, index: number): void {

    this.getYearIngotStatistics(id, index);
  }

  private getYearIngotStatistics(ingotId: number, index: number): void {

    let date = new Date();

    let today$ = this.dataService.getIngotPriceById(ingotId, date);
    let oneweek$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setDate(date.getDate() - 7)));
    let twoweek$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setDate(date.getDate() - 14)));
    let month$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setDate(date.getMonth() - 1)));
    let twomonth$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 2)));
    let threemonth$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 3)));
    let sixmonth$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 6)));
    let ninemonth$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 9)));
    let year$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 12)));
    let twoyear$ = this.dataService.getIngotPriceById(ingotId, new Date(new Date().setMonth(date.getMonth() - 24)));

    combineLatest(today$, oneweek$, twoweek$, month$, twomonth$, threemonth$, sixmonth$, ninemonth$, year$, twoyear$)
      .subscribe(combinedResult => {

        let arr: IngotPrice[] = [];

        arr.push(combinedResult[0][index]);
        arr.push(combinedResult[1][index]);
        arr.push(combinedResult[2][index]);
        arr.push(combinedResult[3][index]);
        arr.push(combinedResult[4][index]);
        arr.push(combinedResult[5][index]);
        arr.push(combinedResult[6][index]);
        arr.push(combinedResult[7][index]);
        arr.push(combinedResult[8][index]);
        arr.push(combinedResult[9][index]);
        
        this.ingotViewModel.selectedGramIndex = index;
        this.ingotViewModel.chartData = this.addaptToChartData(arr);
      }
      );
  }

  addaptToChartData(array: IngotPrice[]): Object {

    debugger;

    if (!array) {

      return;
    }

    array = array.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c < d ? -1 : c > d ? 1 : 0;
    }) as IngotPrice[];

    var labels = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(new Date(array[i].date).toLocaleDateString());
      data1.push(array[i].certificateRubles);
      data2.push(array[i].entitiesRubles);
    }

    let result = {
      labels: labels,
      datasets: [
        {
          label: 'bank buys',
          data: data1,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1
        },
        {
          label: 'bank sells',
          data: data2,
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }
      ]
    }

    return result;
  }
}
