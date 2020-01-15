import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { WeatherRoutingModule } from './weather.routing.module';

import { WeatherComponent } from './components/weather.component';
import { ForecastTableSectionComponent } from './view-sections/forecast.table.section';
import { ForecastAccordionSectionComponent } from './view-sections/forecast.accordion.section';
import { WeatherSectionComponent } from './view-sections/weather.section';

import { ChartComponent } from '../../bases/base.chart.component';

const appRoutes: Routes = [

  { path: '', component: WeatherComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule
  ],
  declarations: [
    WeatherComponent,
    ForecastAccordionSectionComponent,
    ForecastTableSectionComponent,
    WeatherSectionComponent,
    ChartComponent
  ],
  providers: []
})

export class WeatherModule { }
