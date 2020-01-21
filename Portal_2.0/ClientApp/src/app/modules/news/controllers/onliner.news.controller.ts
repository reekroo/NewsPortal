import { Component, OnInit } from '@angular/core';

import { OnlinerNewsService } from '../../../services/news/data.news.onliner.service';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

import { News } from '../../../models/news.model';

@Component({
  templateUrl: '../views/portal.news.veiw.html',
  providers: [OnlinerNewsService]
})

export class OnlinerNewsComponent extends BasePortalNewsComponent implements OnInit {

  peopleNews: Object;
  techNews: Object;
  autoNews: Object;
  realtNews: Object;

  constructor(private specificDataService: OnlinerNewsService) {

    super(specificDataService, null);
  }

  getAllNews() {

    let people$ = this.specificDataService.getPeopleNews();
    let tech$ = this.specificDataService.getTechNews();
    let auto$ = this.specificDataService.getAutoNews();
    let realt$ = this.specificDataService.getRealtNews();

    people$.subscribe((data: News[]) => { this.peopleNews = this.parseNews(data); });
    tech$.subscribe((data: News[]) => { this.techNews = this.parseNews(data); });
    auto$.subscribe((data: News[]) => { this.autoNews = this.parseNews(data); });
    realt$.subscribe((data: News[]) => { this.realtNews = this.parseNews(data); });
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
