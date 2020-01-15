import { Component, Input } from '@angular/core';


import { RefinancingRate } from '../../../models/refinancing.rate.model';

@Component({
  selector: 'refinancing-rates-section',
  templateUrl: './refinancing.rates.section.html',
  styleUrls: ['../../../../assets/styles/bank/refinancing-rates-section.less'],
})

export class RefinancingRatesComponent {

  @Input() refinancingRates: RefinancingRate[];
}
