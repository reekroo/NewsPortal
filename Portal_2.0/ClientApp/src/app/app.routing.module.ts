import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//import { HomeModule } from './modules/home/home.module';
import { NewsModule } from './modules/news/news.module';
import { BankModule } from './modules/bank/bank.module';
import { NaturalResourcesModule } from './modules/natural-resources/natural.resources.module';
import { WeatherModule } from './modules/weather/weather.module';

const appRoutes: Routes = [

  //{ path: '', loadChildren: () => HomeModule },
  //{ path: 'home', loadChildren: () => HomeModule },
  //{ path: 'index', loadChildren: () => HomeModule },
  { path: 'news', loadChildren: () => NewsModule },
  { path: 'bank', loadChildren: () => BankModule },
  { path: 'natural-resources', loadChildren: () => NaturalResourcesModule },
  { path: 'weather', loadChildren: () => WeatherModule },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
