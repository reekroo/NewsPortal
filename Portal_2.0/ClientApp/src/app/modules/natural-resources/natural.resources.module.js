var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalResourcesRoutingModule } from './natural-resources-routing.module';
import { OilComponent } from './view-controllers/oil-controller';
import { NaturalGasComponent } from './view-controllers/natural-gas-controller';
var NaturalResourcesModule = /** @class */ (function () {
    function NaturalResourcesModule() {
    }
    NaturalResourcesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NaturalResourcesRoutingModule
            ],
            declarations: [
                OilComponent,
                NaturalGasComponent
            ]
        })
    ], NaturalResourcesModule);
    return NaturalResourcesModule;
}());
export { NaturalResourcesModule };
//# sourceMappingURL=natural.resources.module.js.map