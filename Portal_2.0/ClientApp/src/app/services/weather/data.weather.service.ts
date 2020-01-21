import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WeatherService {
  private forecastUrl = "http://localhost:50810/api/forecast/";
  private weatherUrl = "http://localhost:50810/api/weather/";

  constructor(private http: HttpClient) { }

  getWeather(city: string, countryCode: string) {
    return this.http.get(this.weatherUrl + city + "/" + countryCode);
    }

  getWeatherByGeolocation(lat: number, lon: number) {
    return this.http.get(this.weatherUrl + lat + "/" + lon);
  }

  getForecast(city: string, countryCode: string) {
    return this.http.get(this.forecastUrl + city + "/" + countryCode);
  }

  getForecastByGeolocation(lat: number, lon: number) {
    return this.http.get(this.forecastUrl + lat + "/" + lon);
  }
}
