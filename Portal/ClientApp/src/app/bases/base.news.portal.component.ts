import { BaseNewsComponent } from "./base.news.component";

import { INewsService } from '../interfaces/news.service.interface'
import { IBaseNewsPinger } from '../interfaces/base.news.pinger.interface'
import { IBaseNews } from '../interfaces/base.news.interface'

import { News } from "../models/news.model";

class BasePortalNewsComponent extends BaseNewsComponent implements IBaseNews, IBaseNewsPinger {

  news: Object;
  title: string;

  interval: any;

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

    this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
  }
}

export { BasePortalNewsComponent };
