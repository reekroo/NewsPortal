import { BaseNewsComponent } from "./base.news.component";

import { INewsService } from '../interfaces/news.service.interface'
import { IBaseNewsPinger } from '../interfaces/base.news.pinger.interface'
import { IBaseNews } from '../interfaces/base.news.interface'

import { News } from "../models/news.model";

class BaseSpecificPortalNewsComponent extends BaseNewsComponent implements IBaseNews, IBaseNewsPinger {

  news: Object;
  title: string;

  interval: any;

  private column: number = 4;

  constructor(private dataService: INewsService, title: string) {
    super();

    this.title = title;
  }

  ngOnInit() {

    this.getAllNews();

    this.interval = setInterval(() => {

      this.getAllNews();
    }, 60000);
  }

  ngOnDestroy() {
    if (this.interval) {

      clearInterval(this.interval);
    }
  }

  getAllNews() {

    this.dataService.getNews().subscribe((data: News[]) => {

      let newsRows: { items: News[]; }[] = [];

      for (let i = 0; i < data.length; i += this.column) {

        newsRows.push({ items: data.slice(i, i + this.column) });
      }

      this.news = newsRows;
    });
  }
}

export { BaseSpecificPortalNewsComponent };
