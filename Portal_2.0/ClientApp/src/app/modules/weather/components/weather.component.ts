import { Component, OnInit } from "@angular/core";

import { IChart } from "../../../interfaces/chart.interface";

import { CityWeather } from "../../../models/weather.model";
import { CityForecast } from "../../../models/forecast.model";
import { WeatherViewModel } from "../view-models/weather.model";

import { WeatherService } from '../../../services/weather/data.weather.service';
import { BaseWeatherComponent } from "../../../bases/base.weather.component";

@Component({
  templateUrl: './weather.component.html',
  providers: [WeatherService]
})

export class WeatherComponent extends BaseWeatherComponent implements OnInit, IChart {

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
            this.chart = this.addaptToChartData(this.weatherViewModel.forecast.weatherList);
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
    super();
  }

  private getWeather() {

    this.weather.getWeather("Minsk", "by").subscribe((data: CityWeather) => { this.weatherViewModel.weather = data; });
  }

  private getForecast() {

    this.weather.getForecast("Minsk", "by").subscribe((data: CityForecast) => {

      this.weatherViewModel.forecast = data;

      this.chart = this.addaptToChartData(this.weatherViewModel.forecast.weatherList);
      this.forecast = this.getCollection(data);
    });
  }

  addaptToChartData(array: CityWeather[]): Object {

    if (!array) {

      return;
    }

    let labels = [];
    let temperature = [];
    let temperatureFeelsLike = [];

    for (var i = 0; i < array.length; i++) {

      labels.push(this.getDate(array[i].date));
      temperature.push(this.getTemperature(array[i].rootInfo.temperature));
      temperatureFeelsLike.push(this.getTemperature(array[i].rootInfo.temperatureFeelsLike));
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
        },
        {
          label: 'temperature feels like',
          data: temperatureFeelsLike,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1
        }
      ]
    }

    return result;
  }

  getCollection(forecast: CityForecast): any[] {

    let customForecast: any[] = [];
    let temp: any[] = [];

    for (var i = 0; i < forecast.weatherList.length - 1; i++) {

      temp.push(forecast.weatherList[i]);

      if (new Date(temp[temp.length - 1].date).getDate() != new Date(forecast.weatherList[i + 1].date).getDate()) {

        customForecast.push(temp);
        temp = [];
      }
    }

    temp.push(forecast.weatherList[forecast.weatherList.length - 1]);
    customForecast.push(temp);

    return customForecast;
  }
}
