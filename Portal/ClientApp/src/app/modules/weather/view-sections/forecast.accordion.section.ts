import { Component, Input } from "@angular/core";

import { BaseWeatherComponent } from "../../../bases/base.weather.component";

@Component({
  selector: 'forecast-accordion-section',
  templateUrl: './forecast.accordion.section.html',
  styleUrls: ['../../../../assets/styles/weather/forecast-accordion-section.less']
})

export class ForecastAccordionSectionComponent extends BaseWeatherComponent {

  @Input() forecast: any[];
}
