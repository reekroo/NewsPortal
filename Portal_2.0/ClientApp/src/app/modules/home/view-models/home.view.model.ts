import { News } from "../../../models/news.model";
import { CurrencyRate } from "../../../models/currency.rate.model";
import { RefinancingRate } from "../../../models/refinancing.rate.model";
import { Weather } from "../../../models/weather.model";

export class HomeViewModel {

  constructor(
    public lastBelNews?: News[],
    public currentRates?: CurrencyRate[],
    public refinancingRate?: RefinancingRate,
    public weather?: Weather
  ) {
    this.lastBelNews = [];
    this.currentRates = [];
    this.refinancingRate = new RefinancingRate();
    this.weather = new Weather();
  }
}
