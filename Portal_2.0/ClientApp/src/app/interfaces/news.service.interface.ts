import { Observable } from "rxjs";

interface INewsService {

  getNews(id: string): Observable<Object>;
}

export { INewsService }
