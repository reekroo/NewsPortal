"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CityForecast = /** @class */ (function () {
    function CityForecast(city, weatherList) {
        this.city = city;
        this.weatherList = weatherList;
        this.city = new City;
        this.weatherList = new Array();
    }
    return CityForecast;
}());
exports.CityForecast = CityForecast;
var City = /** @class */ (function () {
    function City(coord, country, id, name, cod) {
        this.coord = coord;
        this.country = country;
        this.id = id;
        this.name = name;
        this.cod = cod;
    }
    return City;
}());
exports.City = City;
//# sourceMappingURL=forecast.model.js.map