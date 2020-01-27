import { Currency } from '../../../models/currency.model';
import { CurrencyRate } from '../../../models/currency.rate.model';

export class CurrencyViewModel {

  constructor(
    public currencies?: Currency[],
    public rate?: CurrencyRate,
    public rates?: CurrencyRate[],
    public monthRates?: CurrencyRate[],
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
