import { BaseNewsComponent } from "./base.news.component";

import { INewsService } from '../interfaces/news.service.interface'
import { IBaseNewsPinger } from '../interfaces/base.news.pinger.interface'
import { IBaseNews } from '../interfaces/base.news.interface'

import { News } from "../models/news.model";

class BaseSpecificPortalNewsComponent extends BaseNewsComponent implements IBaseNews, IBaseNewsPinger {

  news: Object;
  title: string;
  newsType: string;

  interval: any;

  private column: number = 4;

  constructor(private dataService: INewsService, newsType: string ,title: string) {
    super();

    this.title = title;
    this.newsType = newsType;
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

    this.dataService.getNews(this.newsType).subscribe((data: News[]) => {

      let newsRows: { items: News[]; }[] = [];

      for (let i = 0; i < data.length; i += this.column) {

        newsRows.push({ items: data.slice(i, i + this.column) });
      }

      this.news = newsRows;
    });
  }
}

export { BaseSpecificPortalNewsComponent };
