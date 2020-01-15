import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { BankRoutingModule } from './bank.routing.module';

import { CurrencyComponent } from './components/currency.component';
import { MetalComponent } from './components/ingot.component';
import { RefinancingComponent } from './components/refinancing.rate.component';

import { MonthRateTableComponent } from './view-sections/month.rates.table.section';
import { RateSectionComponent } from './view-sections/rate.section';
import { ConvertorSectionComponent } from './view-sections/rate.converter.section';
import { DefaultRatesComponent } from './view-sections/default.rates.section';

import { DefaultMetalRatesComponent } from './view-sections/default.ingots.section';
import { MetalRatesComponent } from './view-sections/ingot.section';

import { RefinancingRateComponent } from './view-sections/refinancing.rate.section';
import { RefinancingRatesComponent } from './view-sections/refinancing.rates.section';

import { ChartComponent } from '../../bases/base.chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    BankRoutingModule,
  ],
  declarations: [

    CurrencyComponent, MonthRateTableComponent, RateSectionComponent, ConvertorSectionComponent, DefaultRatesComponent,
    MetalComponent, DefaultMetalRatesComponent, MetalRatesComponent,
    RefinancingComponent, RefinancingRateComponent, RefinancingRatesComponent,
    ChartComponent
  ]
})

export class BankModule { }
