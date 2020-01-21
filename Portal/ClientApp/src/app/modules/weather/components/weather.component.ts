import { Component, OnInit } from "@angular/core";

import { IChart } from "../../../interfaces/chart.interface";

import { CityWeather } from "../../../models/weather.model";
import { CityForecast } from "../../../models/forecast.model";
import { WeatherViewModel } from "../view-models/weather.model";

import { WeatherService } from '../../../services/weather/data.weather.service';

@Component({
  templateUrl: './weather.component.html',
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit, IChart {

  weatherViewModel: WeatherViewModel = new WeatherViewModel();

  chart: Object;
  forecast: any[];

  ngOnInit() {

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {

          this.weather.getWeatherByGeolocation(position.coords.latitude, position.coords.longitude).subscribe((data: CityWeather) => {
            this.weatherViewModel.weather = data;
          });
          this.weather.getForecastByGeolocation(position.coords.latitude, position.coords.longitude).subscribe((data: CityForecast) => {
            this.weatherViewModel.forecast = data;
            this.chart = this.addaptToChartData(this.weatherViewModel.forecast.list);
            this.forecast = this.getCollection(data);
          });
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }

          this.getWeather();
          this.getForecast();
        }
      );
    };
  }

  constructor(private weather: WeatherService) {
  }


  public getDate(unixUtcTime: number): string {

    return (new Date(unixUtcTime * 1000).toLocaleDateString());
  }

  public getTemperature(temp: number): number {

    return Number((temp - 273).toFixed(2));
  }


  private getWeather() {

    this.weather.getWeather("Minsk", "by").subscribe((data: CityWeather) => { this.weatherViewModel.weather = data; });
  }

  private getForecast() {

    this.weather.getForecast("Minsk", "by").subscribe((data: CityForecast) => {

      this.weatherViewModel.forecast = data;

      this.chart = this.addaptToChartData(this.weatherViewModel.forecast.list);
      this.forecast = this.getCollection(data);
    });
  }


  addaptToChartData(array: CityWeather[]): Object {

    if (!array) {

      return;
    }

    var labels = [];
    var temperature = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(this.getDate(array[i].dt));
      temperature.push(this.getTemperature(array[i].main.temp));
    }

    let result = {
      labels: labels,
      datasets: [
        {
          label: 'temperature',
          data: temperature,
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }
      ]
    }

    return result;
  }

  getCollection(forecast: CityForecast): any[] {

    let customForecast: any[] = [];
    let temp: any[] = [];

    for (var i = 0; i < forecast.list.length - 1; i++) {

      temp.push(forecast.list[i]);

      if (this.getDate(temp[temp.length - 1].dt) != this.getDate(forecast.list[i + 1].dt)) {

        customForecast.push(temp);
        temp = [];
      }
    }

    temp.push(forecast.list[forecast.list.length - 1]);
    customForecast.push(temp);

    return customForecast;
  }
}
