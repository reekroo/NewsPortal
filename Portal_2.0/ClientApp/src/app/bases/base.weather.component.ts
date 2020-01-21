import { Weather } from "../models/weather.model";
import { Days } from "../enums/days.enum";

class BaseWeatherComponent {

  public getDay(unixUtcTime: string): string {

    let currentDate = new Date(unixUtcTime);

    return Days[currentDate.getDay()];
  }

  public getTime(unixUtcTime: string): string {

    return (new Date(unixUtcTime).toLocaleTimeString());
  }

  public getDate(unixUtcTime: Date): string;
  public getDate(unixUtcTime: string): string;
  public getDate(unixUtcTime: any): string {

    return (new Date(unixUtcTime).toLocaleDateString());
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

  public getTemperature(temp: number): number {

    return Number((temp - 273).toFixed(2));
  }
}

export { BaseWeatherComponent };
