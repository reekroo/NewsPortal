import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { MetalBankService } from '../../../services/bank/data.bank.ingots.service';

import { Ingot } from '../../../models/ingot.model';

@Component({
  selector: 'default-metal-section',
  templateUrl: './default.ingots.section.html',
  styleUrls: ['../../../../assets/styles/bank/default-ingot-section.less'],
  providers: [MetalBankService]
})

export class DefaultMetalRatesComponent implements OnInit {

  defaultMetalRates: Ingot[];

  ngOnInit() {

    this.getDefaultRates();
  }

  constructor(private dataService: MetalBankService) {
  }

  getDefaultRates() {

    let date = new Date();

    let gold$ = this.dataService.getPrice(0, date);
    let silver$ = this.dataService.getPrice(1, date);
    let platinum$ = this.dataService.getPrice(2, date);

    combineLatest(gold$, silver$, platinum$).subscribe(combinedResult => {

      let arr = [];

      arr.push(combinedResult[0][0]);
      arr.push(combinedResult[1][0]);
      arr.push(combinedResult[2][0]);

      arr[0].Name = "Gold";
      arr[1].Name = "Silver";
      arr[2].Name = "Platinum";

      this.defaultMetalRates = arr as Ingot[];
    });
  }
}
