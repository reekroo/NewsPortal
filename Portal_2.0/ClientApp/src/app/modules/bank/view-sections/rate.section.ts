import { Component, Input } from '@angular/core';

import { Rate } from '../../../models/rate.model';

@Component({
  selector: 'rate-section',
  templateUrl: './rate.section.html',
  styleUrls: ['../../../../assets/styles/bank/currency-rate-colorising.less']
})

export class RateSectionComponent {


  @Input() rate: Rate;
  @Input() delta: number;
  @Input() isUpper: number;
}
