import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../interfaces/news.service.interface'

@Injectable()

export class OnlinerNewsService implements INewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.url + '/onliner');
    };

    getPeopleNews() {

        return this.http.get(this.url + '/people');
    };

    getAutoNews() {

        return this.http.get(this.url + '/auto');
    };

    getTechNews() {

        return this.http.get(this.url + '/tech');
    };

    getRealtNews() {

        return this.http.get(this.url + '/realt');
    };
}
