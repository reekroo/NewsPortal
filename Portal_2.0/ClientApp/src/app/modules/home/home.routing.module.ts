import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
