import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../interfaces/news.service.interface'

@Injectable()

export class WorldNewsService implements INewsService {
    
  private newsUrl = "http://localhost:60940/api/news/";
  private channelsUrl = "http://localhost:60940/api/channels";
    
    constructor(private http: HttpClient) { }

    getNews(id: string) {
      return this.http.get(this.newsUrl + id);
    };

    getChannels() {
      return this.http.get(this.channelsUrl);
    };
}
