import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankIngotService } from '../../../services/bank/data.bank.ingots.service';

import { IngotPrice } from '../../../models/ingot.price.model';

@Component({
  selector: 'default-ingot-section',
  templateUrl: './default.ingots.section.html',
  styleUrls: ['../../../../assets/styles/bank/default-ingot-section.less'],
  providers: [BankIngotService]
})

export class DefaultMetalRatesComponent implements OnInit {

  defaultIngotPrices: IngotPrice[];

  ngOnInit() {

    this.getDefaultRates();
  }

  constructor(private dataService: BankIngotService) {
  }

  getDefaultRates() {

    let date = new Date();

    let gold$ = this.dataService.getIngotPriceById(0, date);
    let silver$ = this.dataService.getIngotPriceById(1, date);
    let platinum$ = this.dataService.getIngotPriceById(2, date);

    combineLatest(gold$, silver$, platinum$).subscribe(combinedResult => {

      let arr = [];

      debugger;

      arr.push(combinedResult[0][0]);
      arr.push(combinedResult[1][0]);
      arr.push(combinedResult[2][0]);

      arr[0].name = "Gold";
      arr[1].name = "Silver";
      arr[2].name = "Platinum";

      this.defaultIngotPrices = arr as IngotPrice[];
    });
  }
}
