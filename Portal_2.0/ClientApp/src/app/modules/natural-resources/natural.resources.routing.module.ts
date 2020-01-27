import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OilComponent } from './components/oil.components';
import { NaturalGasComponent } from './components/natural.gas.components';

const appRoutes: Routes = [

    { path: 'oil', component: OilComponent },
    { path: 'gas', component: NaturalGasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class NaturalResourcesRoutingModule { }
