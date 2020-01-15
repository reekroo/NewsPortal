import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { MetalBankService } from '../../../services/bank/data.bank.ingots.service';

import { Metal } from '../../../models/metal.model';
import { Ingot } from '../../../models/ingot.model';

import { IChart } from '../../../interfaces/chart.interface';

import { IngotViewModel } from '../view-models/ingot.view.model';

@Component({
  templateUrl: './ingot.component.html',
  styleUrls: ['../../../../assets/styles/bank/ingots.less'],
  providers: [MetalBankService]
})

export class MetalComponent implements OnInit, IChart {

  ingotViewModel: IngotViewModel = new IngotViewModel();

  ngOnInit() {

    this.getMetals();
  }

  constructor(private dataService: MetalBankService) {
  }

  getMetals(): void {

    this.dataService.getMetals().subscribe((data: Metal[]) => { this.ingotViewModel.metals = data; });
  }

  getRate(id: number): void {

    this.dataService.getPrice(id, new Date()).subscribe((data: Ingot[]) => {

      this.ingotViewModel.ingotsRate = data;
      this.ingotViewModel.showDefault = false;
    });

    this.getChart(id, 0);
  }

  getChart(id: number, index: number): void {

    //this.ingotViewModel.selectedGramIndex = index;
    //this.ingotViewModel.chartData = this.addaptToChartData(this.getYearIngotStatistics(id, index));

    this.getYearIngotStatistics(id, index);
  }

  private getYearIngotStatistics(ingotId: number, index: number): void {

    let date = new Date();

    let today$ = this.dataService.getPrice(ingotId, date);
    let oneweek$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getDate() - 7)));
    let twoweek$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getDate() - 14)));
    let month$ = this.dataService.getPrice(ingotId, new Date(new Date().setDate(date.getMonth() - 1)));
    let twomonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 2)));
    let threemonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 3)));
    let sixmonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 6)));
    let ninemonth$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 9)));
    let year$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 12)));
    let twoyear$ = this.dataService.getPrice(ingotId, new Date(new Date().setMonth(date.getMonth() - 24)));

    combineLatest(today$, oneweek$, twoweek$, month$, twomonth$, threemonth$, sixmonth$, ninemonth$, year$, twoyear$)
      .subscribe(combinedResult => {

        let arr: Ingot[] = [];

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

        //return arr as Ingot[];

        this.ingotViewModel.selectedGramIndex = index;
        this.ingotViewModel.chartData = this.addaptToChartData(arr);
      }
      );
  }

  addaptToChartData(array: Ingot[]): Object {

    if (!array) {

      return;
    }

    array = array.sort(function (a, b) {
      var c = new Date(a.Date);
      var d = new Date(b.Date);
      return c < d ? -1 : c > d ? 1 : 0;
    }) as Ingot[];

    var labels = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(new Date(array[i].Date).toLocaleDateString());
      data1.push(array[i].CertificateRubles);
      data2.push(array[i].EntitiesRubles);
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
