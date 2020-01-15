import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CurrencyComponent } from './components/currency.component';
import { MetalComponent } from './components/ingot.component';
import { RefinancingComponent } from './components/refinancing.rate.component';

const appRoutes: Routes = [

  { path: 'currencies', component: CurrencyComponent },
  { path: 'ingots', component: MetalComponent },
  { path: 'refinancing-rates', component: RefinancingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class BankRoutingModule { }
