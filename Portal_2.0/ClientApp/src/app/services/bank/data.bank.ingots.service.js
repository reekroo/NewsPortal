var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MetalBankService = /** @class */ (function () {
    function MetalBankService(http) {
        this.http = http;
        this.metalsUrl = "https://www.nbrb.by/API/Metals/";
        this.priceUrl = "https://www.nbrb.by/API/Ingots/Prices/";
    }
    MetalBankService.prototype.getMetals = function () {
        return this.http.get(this.metalsUrl);
    };
    ;
    MetalBankService.prototype.getMetal = function (id) {
        return this.http.get(this.metalsUrl + id);
    };
    MetalBankService.prototype.getPrices = function (date) {
        return this.http.get(this.priceUrl + '?onDate=' + date);
    };
    MetalBankService.prototype.getPrice = function (id, date) {
        var d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
        return this.http.get(this.priceUrl + id + '?onDate=' + d);
    };
    MetalBankService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MetalBankService);
    return MetalBankService;
}());
export { MetalBankService };
//# sourceMappingURL=data.bank.ingots.service.js.map