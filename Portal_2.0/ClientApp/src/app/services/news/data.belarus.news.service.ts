import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../interfaces/news.service.interface'

@Injectable()

export class BelarusNewsService implements INewsService {
    
  private newsUrl = "http://localhost:52691/api/news/";
    
    constructor(private http: HttpClient) { }

    getNews(id: string) {
      return this.http.get(this.newsUrl + id);
    };
}
