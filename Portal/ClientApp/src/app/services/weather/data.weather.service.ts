import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WeatherService {

    //private url = "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=bfff0720b491083abffe6d560e8c5e5f";
    
    constructor(private http: HttpClient) { }

    getWeather(city: string, countryCode: string) {

        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    }

    getWeatherByGeolocation(lat: number, lon: number) {

        return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&&appid=bfff0720b491083abffe6d560e8c5e5f");
    }

    getForecast(city: string, countryCode: string) {

        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + countryCode + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    }

    getForecastByGeolocation(lat: number, lon: number) {

        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=bfff0720b491083abffe6d560e8c5e5f");
    }
}