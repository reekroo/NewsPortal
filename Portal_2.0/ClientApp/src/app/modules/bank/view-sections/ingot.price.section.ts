import { Component, Input } from '@angular/core';

import { IngotPrice } from '../../../models/ingot.price.model';

@Component({
  selector: 'ingot-price-section',
  templateUrl: './ingot.price.section.html'
})

export class IngotPriceComponent {

  @Input() ingotPrices: IngotPrice[];
}
