import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NewsComponent } from './components/world.news.component';
import { BelNewsComponent } from './components/belarus.news.component';
import { OnlinerNewsComponent } from './controllers/onliner.news.controller';
import { TutNewsComponent } from './controllers/tut.news.controller';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan.news.controller';
import { NashaNivaNewsComponent } from './controllers/nashaniva.news.controller';
import { BelsatNewsComponent } from './controllers/belsat.news.controller';
import { SvobodaNewsComponent } from './controllers/svoboda.news.controller';
import { CityDogNewsComponent } from './controllers/citydog.news.controller';

const appRoutes: Routes = [

  { path: 'world', component: NewsComponent },
  { path: 'belarus', component: BelNewsComponent },
  { path: 'onliner', component: OnlinerNewsComponent },
  { path: 'citydog', component: CityDogNewsComponent },
  { path: 'tut', component: TutNewsComponent },
  { path: 'belarus-partisan', component: BelarusPartisanNewsComponent },
  { path: 'nasha-niva', component: NashaNivaNewsComponent },
  { path: 'belsat', component: BelsatNewsComponent },
  { path: 'svoboda', component: SvobodaNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class NewsRoutingModule { }
