import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankService } from '../../../services/bank/data.bank.currencies.service';

import { IChart } from '../../../interfaces/chart.interface';

import { Currency } from '../../../models/currency.model';
import { Rate } from '../../../models/rate.model';

import { CurrencyViewModel } from '../view-models/currency.view.model';


@Component({
  templateUrl: './currency.component.html',
  styleUrls: ['../../../../assets/styles/bank/currency.less'],
  providers: [BankService]
})

export class CurrencyComponent implements OnInit, IChart {

  private validCurrncies = [
    323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 290,
    291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321,
    286, 232, 191, 184, 170, 145, 143, 130, 119, 74, 72, 68, 27, 23];

  currencyView: CurrencyViewModel = new CurrencyViewModel();

  ngOnInit() {

    this.getCurrencies();
  }

  constructor(private dataService: BankService) {
  }

  getCurrencies(): void {

    this.dataService.getCurrencies().subscribe((data: any) => {

      if (data) {
        this.currencyView.currencies = (data as Currency[]).filter(r => this.validCurrncies.indexOf(r.Cur_ID) >= 0);
      } else {
        this.currencyView.currencies = [];
      };
    });
  }

  getRate(id: number): void {

    let date = new Date();
    let yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);

    var a1$ = this.dataService.getRate(id);
    var a2$ = this.dataService.getRateByDate(id, yesterday);

    combineLatest(a1$, a2$).subscribe(combinedResult => {

      this.currencyView.rate = combinedResult[0] as Rate;
      this.currencyView.rate.Date = new Date(this.currencyView.rate.Date).toLocaleDateString();

      this.currencyView.delta = this.currencyView.rate.Cur_OfficialRate - (combinedResult[1] as Rate).Cur_OfficialRate;

      this.currencyView.delta = Number((this.currencyView.delta).toFixed(5));

      if (this.currencyView.delta > 0) {
        this.currencyView.isUpper = true;
      } else {
        this.currencyView.isUpper = false;
      }
    });

    let end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
    date.setFullYear(date.getFullYear() - 1);
    let start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());

    this.dataService.getRateByPeriod(id, start, end).subscribe((data: Rate[]) => {

      this.currencyView.chartData = this.addaptToChartData(data);

      let previusMonthData = new Date();
      previusMonthData.setMonth(previusMonthData.getMonth() - 1);
      previusMonthData.setDate(previusMonthData.getDate() - 2);

      this.currencyView.rates = data;
      this.currencyView.monthRates = data.filter(x => new Date(x.Date) >= previusMonthData);
    });

    this.currencyView.showDefaultSection = false;
  }

  addaptToChartData(array: Rate[]): Object {

    if (!array) {

      return;
    }

    array = array.sort(function (a, b) {
      var c = new Date(a.Date);
      var d = new Date(b.Date);
      return c < d ? -1 : c > d ? 1 : 0;
    }) as Rate[];

    var labels = [];
    var data = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(new Date(array[i].Date).toLocaleDateString());
      data.push(array[i].Cur_OfficialRate);
    }

    let result = {
      labels: labels,
      datasets: [{
        label: 'rate',
        data: data,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 1
      }]
    }

    return result;
  }
}
