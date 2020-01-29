import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../models/refinancing.rate.model';

@Component({
  selector: 'home-refinancing-rate-section',
  templateUrl: './home.refinancing.rate.section.html'
})

export class HomeRefinancingRateComponent {

  @Input() refinancingRate: RefinancingRate;
}
