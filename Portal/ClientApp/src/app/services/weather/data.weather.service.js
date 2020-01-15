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
var WeatherService = /** @class */ (function () {
    //private url = "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=bfff0720b491083abffe6d560e8c5e5f";
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (city, countryCode) {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    };
    WeatherService.prototype.getWeatherByGeolocation = function (lat, lon) {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&&appid=bfff0720b491083abffe6d560e8c5e5f");
    };
    WeatherService.prototype.getForecast = function (city, countryCode) {
        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + countryCode + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    };
    WeatherService.prototype.getForecastByGeolocation = function (lat, lon) {
        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    };
    WeatherService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], WeatherService);
    return WeatherService;
}());
export { WeatherService };
//# sourceMappingURL=data.weather.service.js.map