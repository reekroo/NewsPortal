import { Component, Input } from '@angular/core';

import { CurrencyRate } from '../../../models/currency.rate.model';
import { CurrencyMonthRate } from '../../../models/currency.month.rate.model';

@Component({
  selector: 'month-rates-table-section',
  templateUrl: './currency.month.rates.table.section.html',
  styleUrls: ['../../../../assets/styles/bank/currency-rate-colorising.less']
})

export class MonthRateTableComponent {

  monthRates: CurrencyMonthRate[];

  @Input() rates: CurrencyRate[];

  ngOnChanges() {

    if (this.rates) {

      this.rates = this.rates.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c > d ? -1 : c < d ? 1 : 0;
      });

      let data = [];

      for (var i = 0; i < this.rates.length - 1; i++) {

        let rate = new CurrencyMonthRate();

        rate.date = new Date(this.rates[i].date).toLocaleDateString();
        rate.scale = this.rates[i].scale;
        rate.officialRate = this.rates[i].officialRate;
        rate.delta = this.rates[i].officialRate - this.rates[i + 1].officialRate;

        rate.delta = Number((rate.delta).toFixed(5));

        data.push(rate);
      }

      this.monthRates = data;
    }
  }
}
