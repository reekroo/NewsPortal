import { CityWeather, Coord } from "./weather.model";

export class CityForecast {
  constructor(
    public city?: City,
    public cnt?: number,
    public cod?: string,
    public message?: number,
    public list?: CityWeather[]
  ) {
    this.city = new City;
    this.list = new Array<CityWeather>();
  }
}

export class City {
  constructor(
    public coord?: Coord,
    public country?: string,
    public id?: number,
    public name?: string,
    public cod?: number
  ) { }
}
