import { RefinancingRate } from '../../../models/refinancing.rate.model';

export class RefinancingRateViewModel {

  constructor(
    public refinancingRate?: RefinancingRate,
    public refinancingRates?: RefinancingRate[],
    public chartData?: Object
  ) { }
}
