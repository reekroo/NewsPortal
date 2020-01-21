import { Component, Input } from "@angular/core";

import { CityWeather } from "../../../models/weather.model";

import { BaseWeatherComponent } from "../../../bases/base.weather.component";

@Component({
  selector: 'weather-section',
  templateUrl: './weather.section.html',
  providers: []
})

export class WeatherSectionComponent extends BaseWeatherComponent {

  @Input() weather: CityWeather;
}
