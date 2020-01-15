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
var BankService = /** @class */ (function () {
    function BankService(http) {
        this.http = http;
        this.currenciesUrl = "https://www.nbrb.by/API/ExRates/Currencies";
        this.ratesUrl = "https://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1";
        this.periodUrl = "https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=2016-7-1&endDate=2016-7-30";
    }
    BankService.prototype.getCurrencies = function () {
        return this.http.get(this.currenciesUrl);
    };
    ;
    BankService.prototype.getRate = function (id) {
        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/" + id + "?ParamMode=0");
    };
    ;
    BankService.prototype.getRateByPeriod = function (id, start, end) {
        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/Dynamics/" + id + "?startDate=" + start + "&endDate=" + end);
    };
    BankService.prototype.getRateByDate = function (id, date) {
        return this.http.get("https://www.nbrb.by/API/ExRates/Rates/" + id + "?ParamMode=0&onDate=" + date);
    };
    BankService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BankService);
    return BankService;
}());
export { BankService };
//# sourceMappingURL=data.bank.currencies.service.js.map