"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var refinancing_rate_model_1 = require("../../../models/refinancing.rate.model");
var weather_model_1 = require("../../../models/weather.model");
var HomeViewModel = /** @class */ (function () {
    function HomeViewModel(lastBelNews, currentRates, refinancingRate, weather) {
        this.lastBelNews = lastBelNews;
        this.currentRates = currentRates;
        this.refinancingRate = refinancingRate;
        this.weather = weather;
        this.lastBelNews = [];
        this.currentRates = [];
        this.refinancingRate = new refinancing_rate_model_1.RefinancingRate();
        this.weather = new weather_model_1.Weather();
    }
    return HomeViewModel;
}());
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=home.view.model.js.map