import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WeatherComponent } from './components/weather.component';

const appRoutes: Routes = [

  { path: '', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class WeatherRoutingModule { }
