import { Component, Input } from '@angular/core';

import { CurrencyRate } from '../../../models/currency.rate.model';

@Component({
  selector: 'home-currency-header-section',
  templateUrl: './home.currency.header.section.html',
  styleUrls: ['../../../../assets/styles/home/home-currency-header.less'],
})

export class HomeCurrencyHeaderComponent {

  @Input() currencyRates: CurrencyRate[];
}
