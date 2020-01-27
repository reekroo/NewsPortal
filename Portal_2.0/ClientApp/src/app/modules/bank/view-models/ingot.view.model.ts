import { Ingot } from '../../../models/ingot.model';
import { IngotPrice } from '../../../models/ingot.price.model';


export class IngotViewModel {

  constructor(
    public metals?: Ingot[],
    public ingotsRate?: IngotPrice[],

    public chartData?: Object,
    public showDefault?: boolean,
    public selectedGramIndex?: number
  ) {
    this.showDefault = true;
    this.selectedGramIndex = 0;
  }
}
