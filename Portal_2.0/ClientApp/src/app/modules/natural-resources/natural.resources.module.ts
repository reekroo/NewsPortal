import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {NaturalResourcesRoutingModule } from './natural.resources.routing.module';

import { OilComponent } from './components/oil.components';
import { NaturalGasComponent } from './components/natural.gas.components';

@NgModule({
    imports: [
        CommonModule,
        NaturalResourcesRoutingModule
    ],
    declarations: [
        OilComponent,
        NaturalGasComponent
    ]
})

export class NaturalResourcesModule { }
