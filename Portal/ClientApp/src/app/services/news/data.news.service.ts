import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../interfaces/news.service.interface'

@Injectable()

export class NewsService implements INewsService {
    
    private newsUrl = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=2c0c50b615c3445f89aa4ac415c289f8";
    private channelsUrl = "https://newsapi.org/v2/sources?apiKey=2c0c50b615c3445f89aa4ac415c289f8";
    
    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.newsUrl);
    };


    getNewsById(id: string) {

        return this.http.get("https://newsapi.org/v1/articles?source=" + id + "&apiKey=2c0c50b615c3445f89aa4ac415c289f8");
    };

    getChannels() {

        return this.http.get(this.channelsUrl);
    };
}
