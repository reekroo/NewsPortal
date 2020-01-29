import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewsRoutingModule } from './news.routing.module';

import { WorldNewsComponent } from './components/world.news.component';
import { BelarusNewsComponent } from './components/belarus.news.component';
import { OnlinerNewsComponent } from './controllers/onliner.news.component';
import { TutNewsComponent } from './controllers/tut.news.component';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan.news.component';
import { NashaNivaNewsComponent } from './controllers/nashaniva.news.component';
import { BelsatNewsComponent } from './controllers/belsat.news.component';
import { SvobodaNewsComponent } from './controllers/svoboda.news.component';
import { CityDogNewsComponent } from './controllers/citydog.news.component';

import { NewsVerticalOrientedSection } from './view-sections/news.vertical.oriented.section';
import { NewsHorizontalOrientedSection } from './view-sections/news.horizontal.oriented.section';
import { NewsPortalSection } from './view-sections/news.portal.section';
import { BelarusNewsSection } from './view-sections/belarus.news.section';
import { BelarusSpecificNewsSection } from './view-sections/belarus.specific.news.section';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [

    WorldNewsComponent, BelarusNewsComponent,
    OnlinerNewsComponent, TutNewsComponent, CityDogNewsComponent,
    BelarusPartisanNewsComponent, NashaNivaNewsComponent, BelsatNewsComponent, SvobodaNewsComponent,
    BelarusNewsSection, BelarusSpecificNewsSection,
    NewsVerticalOrientedSection, NewsHorizontalOrientedSection, NewsPortalSection
  ]
})

export class NewsModule { }
