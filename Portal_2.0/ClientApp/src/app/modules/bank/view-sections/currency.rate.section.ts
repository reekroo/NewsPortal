import { Component, Input } from '@angular/core';

import { CurrencyRate } from '../../../models/currency.rate.model';

@Component({
  selector: 'rate-section',
  templateUrl: './currency.rate.section.html',
  styleUrls: ['../../../../assets/styles/bank/currency-rate-colorising.less']
})

export class RateSectionComponent {

  @Input() rate: CurrencyRate;
  @Input() delta: number;
  @Input() isUpper: number;
}
