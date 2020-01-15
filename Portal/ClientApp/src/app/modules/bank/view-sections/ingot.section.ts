import { Component, Input } from '@angular/core';

import { Ingot } from '../../../models/ingot.model';

@Component({
  selector: 'metal-section',
  templateUrl: './ingot.section.html'
})

export class MetalRatesComponent {

  @Input() metalRates: Ingot[];
}
