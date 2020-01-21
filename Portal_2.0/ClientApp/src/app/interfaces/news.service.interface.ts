import { Observable } from "rxjs";

interface INewsService {

  getNews(): Observable<Object>;
}

export { INewsService }
