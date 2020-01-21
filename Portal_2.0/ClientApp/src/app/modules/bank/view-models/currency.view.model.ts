import { Currency } from '../../../models/currency.model';
import { Rate } from '../../../models/rate.model';

export class CurrencyViewModel {

  constructor(
    public currencies?: Currency[],
    public rate?: Rate,
    public rates?: Rate[],
    public monthRates?: Rate[],
    public chartData?: Object,
    public showDefaultSection?: boolean,
    public isUpper?: boolean,
    public delta?: number
  ) {
    this.showDefaultSection = true;
    this.isUpper = false;
    this.delta = 0.0;
  }
}
