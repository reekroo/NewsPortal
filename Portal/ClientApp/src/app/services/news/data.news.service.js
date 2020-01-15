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
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=2c0c50b615c3445f89aa4ac415c289f8";
        this.channelsUrl = "https://newsapi.org/v2/sources?apiKey=2c0c50b615c3445f89aa4ac415c289f8";
    }
    NewsService.prototype.getNews = function () {
        return this.http.get(this.newsUrl);
    };
    ;
    NewsService.prototype.getNewsById = function (id) {
        return this.http.get("https://newsapi.org/v1/articles?source=" + id + "&apiKey=2c0c50b615c3445f89aa4ac415c289f8");
    };
    ;
    NewsService.prototype.getChannels = function () {
        return this.http.get(this.channelsUrl);
    };
    ;
    NewsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], NewsService);
    return NewsService;
}());
export { NewsService };
//# sourceMappingURL=data.news.service.js.map