import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewsRoutingModule } from './news.routing.module';

import { NewsComponent } from './components/world.news.component';
import { BelNewsComponent } from './components/belarus.news.component';
import { OnlinerNewsComponent } from './controllers/onliner.news.controller';
import { TutNewsComponent } from './controllers/tut.news.controller';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan.news.controller';
import { NashaNivaNewsComponent } from './controllers/nashaniva.news.controller';
import { BelsatNewsComponent } from './controllers/belsat.news.controller';
import { SvobodaNewsComponent } from './controllers/svoboda.news.controller';
import { CityDogNewsComponent } from './controllers/citydog.news.controller';

import { NewsSectionComponent } from './view-sections/news.section';
import { SpecificNewsSectionComponent } from './view-sections/news.specific.section';
import { OnlinerNewsSectionComponent } from './view-sections/portal.news.section';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [

    NewsComponent, BelNewsComponent,
    OnlinerNewsComponent, TutNewsComponent, CityDogNewsComponent,
    BelarusPartisanNewsComponent, NashaNivaNewsComponent, BelsatNewsComponent, SvobodaNewsComponent,
    NewsSectionComponent, SpecificNewsSectionComponent, OnlinerNewsSectionComponent
  ]
})

export class NewsModule { }
