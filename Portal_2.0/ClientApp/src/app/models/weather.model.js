"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CityWeather = /** @class */ (function () {
    function CityWeather(weather, coordinates, wind, clouds, snow, rain, rootInfo, name, date, id) {
        this.weather = weather;
        this.coordinates = coordinates;
        this.wind = wind;
        this.clouds = clouds;
        this.snow = snow;
        this.rain = rain;
        this.rootInfo = rootInfo;
        this.name = name;
        this.date = date;
        this.id = id;
        this.coordinates = new Coord();
        this.rootInfo = new RootCityWeatherInformation(),
            this.wind = new Wind();
        this.clouds = new Clouds();
        this.weather = [];
    }
    return CityWeather;
}());
exports.CityWeather = CityWeather;
var Coord = /** @class */ (function () {
    function Coord(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
    return Coord;
}());
exports.Coord = Coord;
var RootCityWeatherInformation = /** @class */ (function () {
    function RootCityWeatherInformation(humidity, pressure, temperature, temperatureMax, temperatureMin, temperatureFeelsLike, sunrise, sunset) {
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.temperatureMax = temperatureMax;
        this.temperatureMin = temperatureMin;
        this.temperatureFeelsLike = temperatureFeelsLike;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
    return RootCityWeatherInformation;
}());
exports.RootCityWeatherInformation = RootCityWeatherInformation;
var Wind = /** @class */ (function () {
    function Wind(speed, deg) {
        this.speed = speed;
        this.deg = deg;
    }
    return Wind;
}());
exports.Wind = Wind;
var Clouds = /** @class */ (function () {
    function Clouds(all) {
        this.all = all;
    }
    return Clouds;
}());
exports.Clouds = Clouds;
var Weather = /** @class */ (function () {
    function Weather(description, icon, id, main) {
        this.description = description;
        this.icon = icon;
        this.id = id;
        this.main = main;
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.model.js.map