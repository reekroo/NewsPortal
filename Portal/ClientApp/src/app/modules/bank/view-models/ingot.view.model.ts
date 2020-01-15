import { Metal } from '../../../models/metal.model';
import { Ingot } from '../../../models/ingot.model';


export class IngotViewModel {

  constructor(
    public metals?: Metal[],
    public ingotsRate?: Ingot[],
    public chartData?: Object,
    public showDefault?: boolean,
    public selectedGramIndex?: number
  ) {
    this.showDefault = true;
    this.selectedGramIndex = 0;
  }
}
