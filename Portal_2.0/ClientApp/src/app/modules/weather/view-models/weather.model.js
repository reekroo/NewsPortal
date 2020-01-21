"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weather_model_1 = require("../../../models/weather.model");
var forecast_model_1 = require("../../../models/forecast.model");
var WeatherViewModel = /** @class */ (function () {
    function WeatherViewModel(forecast, weather) {
        this.forecast = forecast;
        this.weather = weather;
        this.forecast = new forecast_model_1.CityForecast();
        this.weather = new weather_model_1.CityWeather();
    }
    return WeatherViewModel;
}());
exports.WeatherViewModel = WeatherViewModel;
//# sourceMappingURL=weather.model.js.map