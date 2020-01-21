"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var days_enum_1 = require("../enums/days.enum");
var BaseWeatherComponent = /** @class */ (function () {
    function BaseWeatherComponent() {
    }
    BaseWeatherComponent.prototype.getDay = function (unixUtcTime) {
        var currentDate = new Date(unixUtcTime);
        return days_enum_1.Days[currentDate.getDay()];
    };
    BaseWeatherComponent.prototype.getTime = function (unixUtcTime) {
        return (new Date(unixUtcTime).toLocaleTimeString());
    };
    BaseWeatherComponent.prototype.getDate = function (unixUtcTime) {
        return (new Date(unixUtcTime).toLocaleDateString());
    };
    BaseWeatherComponent.prototype.getDescription = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].description;
    };
    BaseWeatherComponent.prototype.getIcon = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].icon;
    };
    BaseWeatherComponent.prototype.getTemperature = function (temp) {
        return Number((temp - 273).toFixed(2));
    };
    return BaseWeatherComponent;
}());
exports.BaseWeatherComponent = BaseWeatherComponent;
//# sourceMappingURL=base.weather.component.js.map