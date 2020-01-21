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
var OnlinerNewsService = /** @class */ (function () {
    function OnlinerNewsService(http) {
        this.http = http;
        this.url = "/api/news";
    }
    OnlinerNewsService.prototype.getNews = function () {
        return this.http.get(this.url + '/onliner');
    };
    ;
    OnlinerNewsService.prototype.getPeopleNews = function () {
        return this.http.get(this.url + '/people');
    };
    ;
    OnlinerNewsService.prototype.getAutoNews = function () {
        return this.http.get(this.url + '/auto');
    };
    ;
    OnlinerNewsService.prototype.getTechNews = function () {
        return this.http.get(this.url + '/tech');
    };
    ;
    OnlinerNewsService.prototype.getRealtNews = function () {
        return this.http.get(this.url + '/realt');
    };
    ;
    OnlinerNewsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], OnlinerNewsService);
    return OnlinerNewsService;
}());
export { OnlinerNewsService };
//# sourceMappingURL=data.news.onliner.service.js.map