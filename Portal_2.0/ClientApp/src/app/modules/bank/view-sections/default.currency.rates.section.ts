import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankService } from '../../../services/bank/data.bank.currencies.service';

import { CurrencyRate } from '../../../models/currency.rate.model';

@Component({
  selector: 'default-rates-section',
  templateUrl: './default.currency.rates.section.html',
  providers: [BankService]
})

export class DefaultRatesComponent implements OnInit {

  defaultRates: CurrencyRate[];

  ngOnInit() {

    this.getDefaultRates();
  }

  constructor(private dataService: BankService) {
  }

  private getDefaultRates() {

    var usd$ = this.dataService.getRate(145);
    var eur$ = this.dataService.getRate(292);
    var rub$ = this.dataService.getRate(298);

    combineLatest(usd$, eur$, rub$).subscribe(combinedResult => {

      let arr = [];

      arr.push(combinedResult[0]);
      arr.push(combinedResult[1]);
      arr.push(combinedResult[2]);

      this.defaultRates = arr as CurrencyRate[];
    });
  }
}
