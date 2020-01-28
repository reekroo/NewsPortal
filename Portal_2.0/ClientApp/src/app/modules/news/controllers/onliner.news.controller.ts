import { Component, OnInit } from '@angular/core';

import { BelarusNewsService } from '../../../services/news/data.belarus.news.service';
import { BelarusNews } from '../../../enums/belarus.news.enum';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

import { News } from '../../../models/news.model';

@Component({
  templateUrl: '../views/portal.news.veiw.html',
  providers: [BelarusNewsService]
})

export class OnlinerNewsComponent extends BasePortalNewsComponent implements OnInit {

  peopleNews: Object;
  techNews: Object;
  autoNews: Object;
  realtNews: Object;

  constructor(private specificDataService: BelarusNewsService) {

    super(specificDataService, null, null);
  }

  getNews() {
    this.specificDataService.getNews(BelarusNews.OnlinerPeople).subscribe((data: News[]) => { this.peopleNews = this.parseNews(data); });
    this.specificDataService.getNews(BelarusNews.OnlinerTech).subscribe((data: News[]) => { this.techNews = this.parseNews(data); });
    this.specificDataService.getNews(BelarusNews.OnlinerAuto).subscribe((data: News[]) => { this.autoNews = this.parseNews(data); });
    this.specificDataService.getNews(BelarusNews.OnlinerRealt).subscribe((data: News[]) => { this.realtNews = this.parseNews(data); });
  }

  private parseNews(data: News[]): Object {

    let k = 4;
    let newsRows: { items: News[]; }[] = [];

    for (let i = 0; i < data.length; i += k) {
      newsRows.push({ items: data.slice(i, i + k) });
    }

    return newsRows;
  }
}
