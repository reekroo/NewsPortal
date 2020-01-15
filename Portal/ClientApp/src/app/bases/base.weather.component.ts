import { Weather } from "../models/weather.model";
import { Days } from "../enums/days.enum";

class BaseWeatherComponent {

  public getDay(unixUtcTime: number): string {

    let currentDate = new Date(unixUtcTime * 1000);

    return Days[currentDate.getDay()];
  }

  public getTime(unixUtcTime: number): string {

    return (new Date(unixUtcTime * 1000).toLocaleTimeString());
  }

  public getDate(unixUtcTime: number): string {

    return (new Date(unixUtcTime * 1000).toLocaleDateString());
  }

  public getDescription(array: Weather[]): string {

    if (array.length < 1) {
      return '';
    }

    return array[0].description;
  }

  public getIcon(array: Weather[]): string {

    if (array.length < 1) {
      return '';
    }

    return array[0].icon;
  }

  public getTemp(temp: number): number {

    return Number((temp - 273).toFixed(2));
  }
}

export { BaseWeatherComponent };
