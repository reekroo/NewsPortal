import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WorldNewsComponent } from './components/world.news.component';
import { BelarusNewsComponent } from './components/belarus.news.component';
import { OnlinerNewsComponent } from './controllers/onliner.news.component';
import { TutNewsComponent } from './controllers/tut.news.component';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan.news.component';
import { NashaNivaNewsComponent } from './controllers/nashaniva.news.component';
import { BelsatNewsComponent } from './controllers/belsat.news.component';
import { SvobodaNewsComponent } from './controllers/svoboda.news.component';
import { CityDogNewsComponent } from './controllers/citydog.news.component';

const appRoutes: Routes = [

  { path: 'world', component: WorldNewsComponent },
  { path: 'belarus', component: BelarusNewsComponent },
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
