import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BankService {

  private currenciesUrl = "http://localhost:52598/api/currency/";

  constructor(private http: HttpClient) { }

  getCurrencies() {
      return this.http.get(this.currenciesUrl);
  };

  getRate(id: number) {
    return this.http.get(this.currenciesUrl + id);
  };

  getRateByPeriod(id: number, start: string, end: string) {
    return this.http.get(this.currenciesUrl + id + '/' + start + '/' + end);
  }

  getRateByDate(id: number, date: string) {
    return this.http.get(this.currenciesUrl + id + '/' + date);
  }
}
