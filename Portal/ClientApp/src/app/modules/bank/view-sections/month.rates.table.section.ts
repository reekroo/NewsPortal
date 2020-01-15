import { Component, Input } from '@angular/core';

import { Rate } from '../../../models/rate.model';
import { MonthRate } from '../../../models/month.rate.model';

@Component({
  selector: 'month-rates-table-section',
  templateUrl: './month.rates.table.section.html',
  styleUrls: ['../../../../assets/styles/bank/currency-rate-colorising.less']
})

export class MonthRateTableComponent {

  monthRates: MonthRate[];

  @Input() rates: Rate[];

  ngOnChanges() {

    if (this.rates) {

      this.rates = this.rates.sort(function (a, b) {
        var c = new Date(a.Date);
        var d = new Date(b.Date);
        return c > d ? -1 : c < d ? 1 : 0;
      });

      let data = [];

      for (var i = 0; i < this.rates.length - 1; i++) {

        let rate = new MonthRate();

        rate.Date = new Date(this.rates[i].Date).toLocaleDateString();
        rate.Cur_Scale = this.rates[i].Cur_Scale;
        rate.Cur_OfficialRate = this.rates[i].Cur_OfficialRate;
        rate.Delta = this.rates[i].Cur_OfficialRate - this.rates[i + 1].Cur_OfficialRate;

        rate.Delta = Number((rate.Delta).toFixed(5));

        data.push(rate);
      }

      this.monthRates = data;
    }
  }
}
