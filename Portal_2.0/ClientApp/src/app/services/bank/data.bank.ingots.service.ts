import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BankIngotService {

  private ingotUrl = "http://localhost:52598/api/ingot/";
  private ingotPriceUrl = "http://localhost:52598/api/ingotprice/";

  constructor(private http: HttpClient) { }

  getIngots() {
    return this.http.get(this.ingotUrl);
  };

  getIngotById(id: number) {        
    return this.http.get(this.ingotUrl + id);
  }

  getIngotPrices(date: Date) {
    return this.http.get(this.ingotPriceUrl + date);
  }

  getIngotPriceById(id: number, date: Date) {
    let d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());

    return this.http.get(this.ingotPriceUrl + id + '/' + d);
  }
}
