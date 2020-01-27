import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BankService } from '../../../services/bank/data.bank.currencies.service';
import { RefinancingRateBankService } from '../../../services/bank/data.bank.refinancing.service';

import { TutNewsService } from '../../../services/news/data.news.tut.service';
import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';
import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';
import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';
import { WeatherService } from '../../../services/weather/data.weather.service';

import { RefinancingRate } from '../../../models/refinancing.rate.model';
import { News } from '../../../models/news.model';
import { Weather } from '../../../models/weather.model';

import { HomeViewModel } from '../view-models/home.view.model';

import { Currencies } from '../../../enums/currencies.enum';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['../../../../assets/styles/home/home.less'],
  providers: [
    BankService, RefinancingRateBankService,
    TutNewsService, OnlinerNewsService, CityDogNewsService, SvobodaNewsService,
    WeatherService
  ]
})

export class HomeComponent implements OnInit {

  homeViewModel: HomeViewModel = new HomeViewModel();

  ngOnInit() {

    this.getRefinancingRate();
    this.getCurrentCurrencyRates();
    this.getLastNews();

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {

          this.weather.getWeatherByGeolocation(position.coords.latitude, position.coords.longitude)
            .subscribe((data: Weather) => {
              this.homeViewModel.weather = data;
            });
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }

          this.getWeather();
        }
      );
    };
  }

  constructor(
    private bank: BankService,
    private refinancingRate: RefinancingRateBankService,
    private tut: TutNewsService,
    private onliner: OnlinerNewsService,
    private citydog: CityDogNewsService,
    private svoboda: SvobodaNewsService,
    private weather: WeatherService
  ) { }

  private getCurrentCurrencyRates() {

    combineLatest(this.bank.getRate(Currencies.USD), this.bank.getRate(Currencies.EUR), this.bank.getRate(Currencies.RUB)).subscribe(combinedResult => {

      this.homeViewModel.currentRates = [];

      this.homeViewModel.currentRates.push(combinedResult[0]);
      this.homeViewModel.currentRates.push(combinedResult[1]);
      this.homeViewModel.currentRates.push(combinedResult[2]);
    });
  }

  private getRefinancingRate() {

    this.refinancingRate.getRefinancingRate(new Date()).subscribe((data: RefinancingRate[]) => {

      this.homeViewModel.refinancingRate = data[0];
      this.homeViewModel.refinancingRate.date = new Date(this.homeViewModel.refinancingRate.date).toLocaleDateString();
    });
  }

  private getWeather() {

    this.weather.getWeather("Minsk", "by").subscribe((data: Weather) => { this.homeViewModel.weather = data; });
  }

  private getLastNews() {

    this.tut.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
    this.onliner.getTechNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
    this.svoboda.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
    this.citydog.getNews().subscribe((data: News[]) => { this.homeViewModel.lastBelNews.push(data[0]); });
  }
}
