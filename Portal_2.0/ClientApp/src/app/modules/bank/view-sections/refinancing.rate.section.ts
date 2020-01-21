import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../models/refinancing.rate.model';

@Component({
  selector: 'refinancing-rate-section',
  templateUrl: './refinancing.rate.section.html'
})

export class RefinancingRateComponent {

  @Input() refinancingRate: RefinancingRate;
}
