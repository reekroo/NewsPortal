var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OilComponent } from './view-controllers/oil-controller';
import { NaturalGasComponent } from './view-controllers/natural-gas-controller';
var appRoutes = [
    { path: 'oil', component: OilComponent },
    { path: 'gas', component: NaturalGasComponent }
];
var NaturalResourcesRoutingModule = /** @class */ (function () {
    function NaturalResourcesRoutingModule() {
    }
    NaturalResourcesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(appRoutes)],
            exports: [RouterModule]
        })
    ], NaturalResourcesRoutingModule);
    return NaturalResourcesRoutingModule;
}());
export { NaturalResourcesRoutingModule };
//# sourceMappingURL=natural-resources-routing.module.js.map