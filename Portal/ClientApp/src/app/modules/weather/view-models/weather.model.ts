import { CityWeather } from "../../../models/weather.model";
import { CityForecast } from "../../../models/forecast.model";

export class WeatherViewModel {
  constructor(
    public forecast?: CityForecast,
    public weather?: CityWeather
  ) {
    this.forecast = new CityForecast();
    this.weather = new CityWeather();
  }
}
