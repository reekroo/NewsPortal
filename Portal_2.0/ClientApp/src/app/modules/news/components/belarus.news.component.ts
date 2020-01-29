import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BelarusNewsService } from '../../../services/news/data.belarus.news.service';

import { News } from '../../../models/news.model';
import { BelarusNewsViewModel } from '../view-models/belarus.news.view.model';
import { BelarusNews } from '../../../enums/belarus.news.enum';

@Component({
  templateUrl: './belarus.news.component.html',
  providers: [BelarusNewsService]
})

export class BelarusNewsComponent implements OnInit {

  belNewsViewModel: BelarusNewsViewModel = new BelarusNewsViewModel();

  interval: any;

  constructor(private belarusNewsService: BelarusNewsService) {
  }

  ngOnInit() {

    this.getNews();

    this.interval = setInterval(() => {

      this.getNews();
    }, 60000);
  }

  ngOnDestroy() {
    if (this.interval) {

      clearInterval(this.interval);
    }
  }

  getNews() {

    this.belarusNewsService.getNews(BelarusNews.Belsat).subscribe((data: News[]) => { this.belNewsViewModel.belsatNews = data.slice(0, 4); });
    this.belarusNewsService.getNews(BelarusNews.CityDog).subscribe((data: News[]) => { this.belNewsViewModel.cityDogNews = data.slice(0, 4); });

    combineLatest(
      this.belarusNewsService.getNews(BelarusNews.OnlinerAuto),
      this.belarusNewsService.getNews(BelarusNews.OnlinerPeople),
      this.belarusNewsService.getNews(BelarusNews.OnlinerRealt),
      this.belarusNewsService.getNews(BelarusNews.OnlinerTech)
    ).subscribe(combinedResult => {

      let arr = [];

      arr.push(combinedResult[0][0]);
      arr.push(combinedResult[0][1]);

      arr.push(combinedResult[1][0]);
      arr.push(combinedResult[1][1]);

      arr.push(combinedResult[2][0]);
      arr.push(combinedResult[2][1]);

      arr.push(combinedResult[3][0]);
      arr.push(combinedResult[3][1]);

      this.belNewsViewModel.onlinerNews = arr as News[];
    });

    this.belarusNewsService.getNews(BelarusNews.Tut).subscribe((data: News[]) => { this.belNewsViewModel.tutNews = data.slice(0, 8); });
    this.belarusNewsService.getNews(BelarusNews.Svoboda).subscribe((data: News[]) => { this.belNewsViewModel.svobodaNews = data.slice(0, 8); });
    this.belarusNewsService.getNews(BelarusNews.NashaNiva).subscribe((data: News[]) => { this.belNewsViewModel.nashaNivaNews = data.slice(0, 8); });
    this.belarusNewsService.getNews(BelarusNews.BelarusPartisan).subscribe((data: News[]) => { this.belNewsViewModel.belarusPartisanNews = data.slice(0, 6); });
  }
}
