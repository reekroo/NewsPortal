import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './components/home.component';
import { WeatherSectionComponent } from '../../modules/weather/view-sections/weather.section';
import { SpecificNewsSectionComponent } from '../../modules/news/view-sections/news.specific.section';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [

    HomeComponent,
    SpecificNewsSectionComponent,
    WeatherSectionComponent
  ]
})

export class HomeModule { }
