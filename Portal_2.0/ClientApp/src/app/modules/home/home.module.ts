import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './components/home.component';
import { HomeNewsComponent } from './view-sections/home.news.section';
import { HomeRefinancingRateComponent } from './view-sections/home.refinancing.rate.section';
import { HomeCurrencyHeaderComponent } from './view-sections/home.currency.header.section';
import { WeatherSectionComponent } from '../../modules/weather/view-sections/weather.section';
import { NewsHorizontalOrientedSection } from '../../modules/news/view-sections/news.horizontal.oriented.section';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeCurrencyHeaderComponent, HomeNewsComponent, HomeRefinancingRateComponent,
    //SpecificNewsSectionComponent,
    //WeatherSectionComponent
  ]
})

export class HomeModule { }
