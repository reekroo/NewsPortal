import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../interfaces/news.service.interface'

@Injectable()

export class NashaNivaNewsService implements INewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.url + '/nashaniva');
    };

}
