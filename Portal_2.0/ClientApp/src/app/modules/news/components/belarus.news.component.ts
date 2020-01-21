import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BelsatNewsService } from '../../../services/news/data.news.belsat.service';
import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';
import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';
import { TutNewsService } from '../../../services/news/data.news.tut.service';
import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';
import { NashaNivaNewsService } from '../../../services/news/data.news.nashaniva.service';
import { BelarusPartisanNewsService } from '../../../services/news/data.news.belaruspartisan.service';

import { News } from '../../../models/news.model';
import { BelarusNewsViewModel } from '../view-models/belarus.news.view.model';

@Component({
  templateUrl: './belarus.news.component.html',
  providers: [
    OnlinerNewsService,
    TutNewsService,
    BelarusPartisanNewsService,
    NashaNivaNewsService,
    BelsatNewsService,
    SvobodaNewsService,
    CityDogNewsService
  ]
})

export class BelNewsComponent implements OnInit {

  belNewsViewModel: BelarusNewsViewModel = new BelarusNewsViewModel();

  interval: any;

  constructor(
    private onliner: OnlinerNewsService,
    private tut: TutNewsService,
    private belarusPartisan: BelarusPartisanNewsService,
    private nashaNiva: NashaNivaNewsService,
    private belsat: BelsatNewsService,
    private svoboda: SvobodaNewsService,
    private citydog: CityDogNewsService) {

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

    this.belsat.getNews().subscribe((data: News[]) => { this.belNewsViewModel.belsatNews = data.slice(0, 4); });

    this.citydog.getNews().subscribe((data: News[]) => { this.belNewsViewModel.cityDogNews = data.slice(0, 4); });

    let auto$ = this.onliner.getAutoNews();
    let people$ = this.onliner.getPeopleNews();
    let realt$ = this.onliner.getRealtNews();
    let tech$ = this.onliner.getTechNews();

    combineLatest(auto$, people$, realt$, tech$).subscribe(combinedResult => {

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

    this.tut.getNews().subscribe((data: News[]) => { this.belNewsViewModel.tutNews = data.slice(0, 8); });

    this.svoboda.getNews().subscribe((data: News[]) => { this.belNewsViewModel.svobodaNews = data.slice(0, 8); });

    this.nashaNiva.getNews().subscribe((data: News[]) => { this.belNewsViewModel.nashaNivaNews = data.slice(0, 8); });

    this.belarusPartisan.getNews().subscribe((data: News[]) => { this.belNewsViewModel.belarusPartisanNews = data.slice(0, 6); });
  }
}
